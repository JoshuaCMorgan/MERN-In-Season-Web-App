import ShoppingListItem from "../models/shoppingListItemModel.js";
import { StatusCodes } from "http-status-codes";

const addItem = async (req, res) => {
  const item = await ShoppingListItem.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteItem = async (req, res) => {
  res.send("delete list item");
};

const getAllItems = async (req, res) => {
  const items = await ShoppingListItem.find({});
  res.status(StatusCodes.OK).json({ items });
};

const showItems = async (req, res) => {
  res.send("show list Items");
};

export { addItem, deleteItem, getAllItems, showItems };
