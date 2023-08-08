import mongoose from "mongoose";
import validator from "validator";
import { PRODUCE_TYPE } from "../utils/constants.js";

const ProduceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  cat_id: {
    type: String,
  },
  RFRN_ID: {
    type: Number,
  },
  type: {
    type: String,
    enum: Object.values(PRODUCE_TYPE),
  },
  image: {
    type: String,
  },
  desc: {
    type: String,
  },
  plural: {
    type: Boolean,
  },
  states: mongoose.Schema.Types.Mixed,
});

export default mongoose.model("Produce", ProduceSchema);
