import mongoose from "mongoose";
import validator from "validator";

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
    enum: {
      values: ["Fruit", "Vegetable", "Herb", "Legume", "Nut"],
      message: "{VALUE} is not supported",
    },
    // enum: ["fruit", "produce"],
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
