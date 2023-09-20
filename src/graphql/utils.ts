import { fromGlobalId, toGlobalId } from "graphql-relay";
import Token from "../models/Token.js";
import { WhereTokensFilter } from "./resolvers.js";

export const paginateTokens = async (
  limit: number,
  where: WhereTokensFilter,
  after: string
) => {
  const query: any = {};

  if (where) {
    const { collectionAddress, genre, tokens } = where;
    if (collectionAddress) {
      query["token.collectionAddress"] = collectionAddress;
    }
    if (genre) {
      query["token.metadata.genre"] = getGenreName(genre);
    }
    if (tokens && tokens.length) {
      // TODO
    }
  }

  // If 'after' is provided, create a query to start after the provided cursor
  if (after) {
    query._id = { $gt: fromGlobalId(after).id };
  }

  // Fetch the tokens with the query and limit the results
  const tokensQuery = Token.find(query)
    .limit(limit + 1) // Fetch one extra to check if there's a next page
    .sort({ _id: 1 });

  const tokens = await tokensQuery.exec();

  // Determine if there's a next page by checking if we fetched more than 'limit' items
  const hasNextPage = tokens.length > limit;

  // Remove the extra item if it's fetched for hasNextPage calculation
  if (hasNextPage) {
    tokens.pop();
  }

  // Get the cursor for the last item in the current page
  const endCursor =
    tokens.length > 0 ? toGlobalId("User", tokens[tokens.length - 1].id) : null;

  return {
    pageInfo: {
      hasNextPage,
      endCursor,
    },
    data: tokens,
  };
};

export const getGenreName = (str: string) => {
  switch (str) {
    case "Bass_AND_House":
      return "Bass House";
    case "Dance_AND_EDM":
      return "Dance & EDM";
    case "Drum_AND_Bass":
      return "Drum & Bass";
    case "Folk_AND_SingerSongwriter":
      return "Folk & Singer-Songwriter";
    case "Hiphop_AND_Rap":
      return "Hip-hop & Rap";
    case "Jazz_AND_Blues":
      return "Jazz & Blues";
    default:
      return str;
  }
};
