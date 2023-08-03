import { Router } from "express";
const router = Router();

import {
  addItem,
  deleteItem,
  getAllItems,
} from "../controllers/ListItemsController.js";

import {
  validateIdParam,
  validateItemInput,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getAllItems).post(validateItemInput, addItem);
router.route("/:id").delete(validateIdParam, deleteItem);

export default router;
