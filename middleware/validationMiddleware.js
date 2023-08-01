import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { PRODUCE_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import ShoppingListItem from "../models/shoppingListItemModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError(errorMessages);
        }

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateItemInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("produceType")
    .isIn(Object.values(PRODUCE_TYPE))
    .withMessage("invalid produce type"),
]);
