import ListItem from "../models/ListItemModel.js";
import { StatusCodes } from "http-status-codes";

const getAllItems = async (req, res) => {
  const items = await ListItem.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ items });
};

const addItem = async (req, res) => {
  // since we passed along the userId by adding it in middleware, we can assign it to 'createdBy' and add
  req.body.createdBy = req.user.userId;
  const item = await ListItem.create(req.body);
  res.status(StatusCodes.CREATED).json({ item });
};

const deleteItem = async (req, res) => {
  const removedItem = await ListItem.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ item: removedItem });
};

export { addItem, deleteItem, getAllItems };
