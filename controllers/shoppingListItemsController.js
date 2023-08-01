import ShoppingListItem from "../models/shoppingListItemModel.js";
import { StatusCodes } from "http-status-codes";

const addItem = async (req, res) => {
  const job = await ShoppingListItem.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteItem = async (req, res) => {
  res.send("delete list item");
};

const getAllItems = async (req, res) => {
  const jobs = await JoShoppingListItem.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

const showItems = async (req, res) => {
  res.send("show list Items");
};

export { addItem, deleteItem, getAllItems, showItems };
