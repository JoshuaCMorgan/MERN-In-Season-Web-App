import mongoose from "mongoose";
import { PRODUCE_TYPE } from "../utils/constants.js";

const shoppingListItemSchema = new mongoose.Schema(
  {
    name: String,
    produceType: {
      type: String,
      enum: Object.values(PRODUCE_TYPE),
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("ShoppingListItem", ShoppingListSchema);
