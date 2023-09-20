const typeDefs = `#graphql
type TokenDoc {
  collectionName: String
  tokenId: String
  tokenUrlMimeType: String
  name: String
  collectionAddress: String,
  description: String,
  lastRefreshTime: String,
  metadata: NftMetadata,
  tokenStandard: String,
  tokenUrl: String,
  owner: String,
}
type NftMetadata {
  image: String
  name: String
  animation_url: String
  genre: String
  artist: String
  bpm: String
  duration: String
}
type TransactionInfo {
    blockNumber: String
    blockTimestamp: String
    transactionHash: String
}
type Market {
  marketAddress: String
  marketType: String
  status: String
  tokenId: String
  transactionInfo: TransactionInfo!
}
type Data {
  token: TokenDoc!
  marketsSummary: [Market!]
}

input WhereTokenFilter {
  collectionAddress: String
  tokenId: String
}
enum GenreTypes {
  Bass_AND_House
  Classical
  Dance
  Dance_AND_EDM
  Drum_AND_Bass
  Electronic
  Folk_AND_SingerSongwriter
  Hiphop_AND_Rap
  House
  Indie
  Jazz_AND_Blues
  Pop
  Soundtrack
  Triphop
}
input TokensWhereFilter {
  collectionAddress: String
  tokens: WhereTokenFilter
  genre: GenreTypes
}
input CollectionWhereFilter {
  genre: GenreTypes
}
  # input TokenInput {
  #   name: String
  #   address: String
  #   tokenId: String
  # }
  input Paging {
    after: String
    limit: Int
  }
  type PagingOut {
    hasNextPage: Boolean
    endCursor: String
  }
type Token {
  data: [Data!]
  pageInfo: PagingOut
}
  type Query {
    token(ID: ID!): Token!
    tokens(paging: Paging, where: TokensWhereFilter): Token!
    collections(paging: Paging, where: CollectionWhereFilter): Token!
  }

  # type Mutation {
  #   createToken(token: TokenInput!): Token!
  # }
`;
export default typeDefs;
