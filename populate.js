import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Produce from "./models/Produce.js";
import jsonProduce from "./fruits-veggie.json" assert { type: "json" };

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Produce.deleteMany();
    await Produce.create(jsonProduce);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
