import ShoppingListItem from "../models/ShoppingListItemModel.js";
import { StatusCodes } from "http-status-codes";

const addItem = async (req, res) => {
  const item = await ShoppingListItem.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteItem = async (req, res) => {
  const removedItem = await ShoppingListItem.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ item: removedItem });
};

const getAllItems = async (req, res) => {
  const items = await ShoppingListItem.find({});
  res.status(StatusCodes.OK).json({ items });
};

export { addItem, deleteItem, getAllItems };
