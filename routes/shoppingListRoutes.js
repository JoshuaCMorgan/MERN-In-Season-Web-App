import { Router } from "express";
const router = Router();

import {
  addItem,
  deleteItem,
  getAllItems,
  showItems,
} from "../controllers/shoppingListItemsController.js";

import { validateItemInput } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllItems).post(validateItemInput, addItem);
router.route("/").get(showItems);
router.route("/:id").delete(deleteItem);

export default router;
