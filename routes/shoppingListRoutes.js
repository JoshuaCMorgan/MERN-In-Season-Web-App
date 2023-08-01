import { Router } from "express";
const router = Router();

import {
  addItem,
  deleteItem,
  getAllItems,
} from "../controllers/shoppingListItemsController.js";

import { validateItemInput } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllItems).post(validateItemInput, addItem);
router.route("/:id").delete(deleteItem);

export default router;
