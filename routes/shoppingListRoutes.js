import express from "express";
const router = express.Router();

import {
  addItem,
  deleteItem,
  showItems,
} from "../controllers/shoppingListController.js";

router.route("/dashboard").post(addItem);
router.route("/dashboard/shopping-list").get(showItems);
router.route("/:id").delete(deleteItem);

export default router;
