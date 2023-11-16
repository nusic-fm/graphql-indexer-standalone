import { fromGlobalId, toGlobalId } from "graphql-relay";
import Token from "../models/Token.js";
import { getGenreName, paginateTokens } from "./utils.js";

export type WhereTokensFilter = {
  collectionAddress: string;
  tokens: [
    {
      collectionAddress: string;
      tokenId: string;
    }
  ];
  genre: string;
};

type TokensInput = {
  paging?: {
    after?: string | null;
    limit?: number | null;
  };
  where?: WhereTokensFilter;
};

type CollectionWhereFilter = {
  genre?: string;
  collectionAddress?: string[];
  platform?: "soundxyz";
  
};

type CollectionsInput = {
  paging?: {
    after?: string | null;
    limit?: number | null;
  };
  where?: CollectionWhereFilter;
};

const resolvers = {
  Query: {
    async token(_, { ID }) {
      return await Token.findById(ID);
    },
    async tokens(_, { paging, where }: TokensInput) {
      const { after, limit } = paging ?? { after: null, limit: 1 };
      const _limit = limit > 100 ? 100 : limit;
      const result = await paginateTokens(_limit, where, after);

      return result;
    },
    async collections(_, { paging, where }: CollectionsInput) {
      const { after, limit } = paging ?? { after: null, limit: 10 };
      const _limit = limit > 100 ? 100 : limit;
      const queries = [];
      if (after) {
        const lastUser = await Token.findById(fromGlobalId(after).id);
        queries.push({ $match: { _id: { $gt: lastUser._id } } });
      }
      if (where) {
        const { genre, collectionAddress, platform } = where;
        if (genre) {
          queries.push({
            $match: { "token.metadata.genre": getGenreName(genre) },
          });
        }
        if (platform) {
          queries.push({
            $match: { "token.metadata.external_url": {
              $regex: /^https:\/\/www\.sound\.xyz/
            } },
          });
        }
        if (collectionAddress && collectionAddress.length) {
          const addrs = collectionAddress.filter((v, i, array) => array.indexOf(v) === i);
          queries.push({
            $match: {"collectionAddress": {$in: addrs}}
          })
        }
      }
      queries.push(
        {
          $group: {
            _id: "$collectionAddress",
            collectionAddress: { $first: "$collectionAddress" },
            id: { $first: "$_id" },
          },
        },
        {
          $sort: {collectionAddress: 1}
        },
        { $project: { _id: 0, collectionAddress: 1, id: 1 } },
        // { $skip: skip },
        { $limit: _limit + 1 }
      );

      const tokens = await Token.aggregate(queries);

      const collections = await Token.find({
        _id: { $in: tokens.map((t) => t.id) },
      });
      // .find()
      //   .distinct("collectionAddress")
      //   .skip(skip)
      //   .limit(_limit + 1);
      const hasNextPage = collections.length > limit;
      const edges = collections
        .slice(0, limit)
        .map((user) => ({ cursor: toGlobalId("User", user.id), node: user }));

      return {
        data: collections.slice(0, limit),
        pageInfo: {
          hasNextPage,
          endCursor: hasNextPage ? edges[edges.length - 1].cursor : null,
        },
      };
    },
  },
  // Mutation: {
  //   async createToken(_, { token: { name, address, tokenId } }) {
  //     const createdToken = new Token({ address, name, tokenId });
  //     const res = await createdToken.save();

  //     return {
  //       id: res.id,
  //       ...(res as any)._doc,
  //     };
  //   },
  // },
};

export default resolvers;
