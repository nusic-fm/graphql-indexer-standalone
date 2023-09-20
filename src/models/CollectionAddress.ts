import { model, Schema } from "mongoose";

const collectionAddressSchema = new Schema({
  _id: String,
  blockNo: Number,
});

export default model(
  "CollectionAddress",
  collectionAddressSchema,
  "collectionAddresses"
);
