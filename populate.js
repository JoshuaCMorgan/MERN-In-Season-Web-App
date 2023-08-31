import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import List from "./models/ListModel.js";
import User from "./models/UserModel.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  // const user = await User.findOne({ email: "jmorg0605@gmail.com" });
  const user = await User.findOne({ email: "test@test.com" });

  const jsonItems = JSON.parse(
    await readFile(new URL("./utils/mockData.json", import.meta.url))
  );
  const items = jsonItems.map((job) => {
    return { ...job, createdBy: user._id };
  });

  await List.deleteMany({ createdBy: user._id });
  await List.create(items);
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
