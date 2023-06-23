import express from "express";
const router = express.Router();

import {
  getAllProduce,
  getAllProduceStatic,
} from "../controllers/produceController.js";

router.route("/").get(getAllProduce);
router.route("/static").get(getAllProduceStatic);

export default router;
