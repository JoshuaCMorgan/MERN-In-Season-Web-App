import { Router } from "express";
const router = Router();

import {
  addItem,
  deleteItem,
  getAllItems,
} from "../controllers/listController.js";

import {
  validateIdParam,
  validateItemInput,
} from "../middleware/validationMiddleware.js";

import { checkForTestUser } from "../middleware/authMiddleware.js";

router.route("/").get(getAllItems).post(validateItemInput, addItem);
router.route("/:id").delete(checkForTestUser, validateIdParam, deleteItem);

export default router;
