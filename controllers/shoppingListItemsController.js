import ShoppingListItem from "../models/ShoppingListItemModel.js";
import { StatusCodes } from "http-status-codes";

const getAllItems = async (req, res) => {
  console.log(req.user);
  const items = await ShoppingListItem.find({});
  res.status(StatusCodes.OK).json({ items });
};

const addItem = async (req, res) => {
  const item = await ShoppingListItem.create(req.body);
  res.status(StatusCodes.CREATED).json({ item });
};

const deleteItem = async (req, res) => {
  const removedItem = await ShoppingListItem.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ item: removedItem });
};

export { addItem, deleteItem, getAllItems };
