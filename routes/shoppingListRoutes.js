import { Router } from "express";
const router = Router();

import {
  addItem,
  deleteItem,
  getAllItems,
  showItems,
} from "../controllers/shoppingListItemsController.js";
import { validateItemInput } from "../middleware/validationMiddleware.js";

router
  .route("/shopping-list")
  .get(getAllItems)
  .post(validateItemInput, addItem);
router.route("/shopping-list").get(showItems);
router.route("/shopping-list/:id").delete(deleteItem);

export default router;
