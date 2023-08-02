import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
const router = Router();

import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", getApplicationStats);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
