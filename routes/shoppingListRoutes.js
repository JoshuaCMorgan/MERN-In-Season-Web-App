import express from "express";
const router = express.Router();

import {
  addItem,
  deleteItem,
  getAllItems,
  showItems,
} from "../controllers/shoppingListController.js";

router.route("/").post(addItem).get(getAllItems);
router.route("/shopping-list").get(showItems);
router.route("/:id").delete(deleteItem);

export default router;
