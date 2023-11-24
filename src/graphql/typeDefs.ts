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
input TrackWhere {
    platformId: String
    address: String
    name: String
    standard: String
    artistId: String
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
  type Lyrics {
      text: String
    }
  type Artwork {
    uri: String
    mimeType: String
  }
  type Attribute {
    value: String
    trait_type: String
  }
  type Metadata {
    bpm: Int
    key: String
    isrc: String
    name: String
    genre: String
    image: String
    title: String
    artist: String
    lyrics: Lyrics
    artwork: Artwork
    credits: String
    license: String
    version: String
    mimType: String
    publisher: String
    attributes: [Attribute!]
    external_url: String
    animation_url: String
    losslessAudio: String
    locationCreated: String
    nftSerialNumber: String
  }

  type Track {
    platformId: String
    address: String
    name: String
    chainId: String
    mintingProtocol: String
    symbol: String
    startingBlock: String
    standard: String

    artistId: String
    createdAtBlockNumber: String
    createdAtTime: String
    description: String
    artworkIpfsHash: String
    artworkMimeType: String
    artworkUrl: String
    audioIpfsHash: String
    audioMimeType: String
    audioUrl: String

    publicReleaseTime: String
    metadata: Metadata

    slug: String
    supportingArtist: String
    title: String
    websiteUrl: String
  }
  type TrackNode {
    nodes: [Track!]
    pageInfo: PagingOut
  }
  type Artist {
    avatarIpfsHash: String
    avatarUrl: String
    createdAtBlockNumber: String
    createdAtTime: String
    description: String
    name: String
    slug: String
  }
  type ArtistNode {
    nodes: [Artist!]
    pageInfo: PagingOut
  }
  input ArtistWhere {
    artistIds: [String]
  }
  
  type Query {
    token(ID: ID!): Token!
    tokens(paging: Paging, where: TokensWhereFilter): Token!
    collections(paging: Paging, where: CollectionWhereFilterDef): Token!
    tracks(paging: Paging, where: TrackWhere): TrackNode!
    artists(paging: Paging, where: ArtistWhere): ArtistNode!
  }

  # type Mutation {
  #   createToken(token: TokenInput!): Token!
  # }
`;
export default typeDefs;
