import { model, Schema } from "mongoose";

const configSchema = new Schema({
  latestBlock: Number,
  totalBlocks: Number,
});

export default model("Config", configSchema, "configs");
