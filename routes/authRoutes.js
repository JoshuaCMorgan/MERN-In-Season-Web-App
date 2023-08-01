import express from "express";
const router = express.Router();

import { register, login } from "../controllers/authController.js";
import { validateRegisterInput } from "../middleware/validationMiddleware.js";
validateRegisterInput;

router.route("/register").post(validateRegisterInput, register);
router.route("/login").post(login);

export default router;
