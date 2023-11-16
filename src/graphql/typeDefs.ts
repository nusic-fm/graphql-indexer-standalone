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
  mintInfo: MintInfo
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
type MintInfo {
  originatorAddress: String
  price: MintPriceInfo
  toAddress: String
  mintContext: MintContext
}
type MintPriceInfo {
  blockNumber: Int
  chainTokenPrice: ChainTokenPrice
}
type ChainTokenPrice {
  raw: String
  decimal: Float
  currency: Currency
}
type Currency {
  address: String
  decimal: Int
  name: String
}
type MintContext {
  blockNumber: Int
  transactionHash: String
  blockTimestamp: String
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
enum PlatformOptions {
  soundxyz
}
input TokensWhereFilter {
  collectionAddress: String
  tokens: WhereTokenFilter
  genre: GenreTypes
}
input CollectionWhereFilterDef {
  genre: GenreTypes
  collectionAddress: [String]
  platform: PlatformOptions
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
    collections(paging: Paging, where: CollectionWhereFilterDef): Token!
  }

  # type Mutation {
  #   createToken(token: TokenInput!): Token!
  # }
`;
export default typeDefs;
