import { model, Schema } from "mongoose";

const artistSchema = new Schema({
  avatarIpfsHash: String,
  avatarUrl: String,
  createdAtBlockNumber: String,
  createdAtTime: String,
  description: String,
  name: String,
  slug: String,
  userId: String,
});

export default model("Artist", artistSchema, "artists");
