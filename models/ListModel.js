import mongoose from "mongoose";
import { PRODUCE_TYPE } from "../utils/constants.js";

const ListSchema = new mongoose.Schema(
  {
    name: String,
    type: {
      type: String,
      enum: Object.values(PRODUCE_TYPE),
    },
    done: Boolean,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("List", ListSchema);
