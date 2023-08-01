import express from "express";
const router = express.Router();

import { getAllProduce } from "../controllers/produceController.js";

router.route("/").get(getAllProduce);

export default router;
