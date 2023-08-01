import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import produceRouter from "./routes/produceRoutes.js";
import shoppingListRouter from "./routes/shoppingListRoutes.js";

// middleware

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV != "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.get("/api/v1", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/produce", produceRouter);
app.use("/api/v1/shopping-list", shoppingListRouter);

app.use("*", (req, res) => {
  res.status(500).json({ msg: "something went wrong with route" });
});

// middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5101;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
