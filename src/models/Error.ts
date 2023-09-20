import { model, Schema } from "mongoose";

const errorSchema = new Schema({
  message: String,
  code: String,
  customMessage: String,
  blockNo: Number,
});

export default model("Error", errorSchema, "errors");
