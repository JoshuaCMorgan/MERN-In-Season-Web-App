import { Router } from "express";
const router = Router();

import {
  addItem,
  deleteItem,
  getAllItems,
  toggleItem,
} from "../controllers/listController.js";

import {
  validateIdParam,
  validateItemInput,
} from "../middleware/validationMiddleware.js";

import { checkForTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllItems)
  .post(checkForTestUser, validateItemInput, addItem);
router
  .route("/:id")
  .delete(checkForTestUser, validateIdParam, deleteItem)
  .patch(validateIdParam, toggleItem);

export default router;
