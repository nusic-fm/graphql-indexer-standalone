import { model, Schema } from "mongoose";

const trackSchema = new Schema({
  platformId: String,
  address: String,
  name: String,
  chainId: String,
  mintingProtocol: String,
  symbol: String,
  startingBlock: String,
  standard: String,

  // From Nested - Processed Track
  artistId: String,
  createdAtBlockNumber: String,
  createdAtTime: String,
  description: String,
  artworkIpfsHash: String, // lossyArtworkIpfsHash
  artworkMimeType: String, // lossyArtworkMimeType
  artworkUrl: String, // lossyArtworkUrl
  audioIpfsHash: String, // lossyAudioIpfsHash
  audioMimeType: String, // lossyAudioMimeType
  audioUrl: String, // lossyAudioUrl

  // From Nested - NFTs By NftFactoryId
  publicReleaseTime: String,
  metadata: Schema.Types.Mixed,

  slug: String,
  supportingArtist: String,
  title: String,
  websiteUrl: String,
});

export default model("Track", trackSchema, "tracks");
