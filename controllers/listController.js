import List from "../models/ListModel.js";
import { StatusCodes } from "http-status-codes";

const getAllItems = async (req, res) => {
  const { sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  const items = await List.find(queryObject).sort({ done: 1 });

  const totalItems = await List.countDocuments(queryObject);

  res.status(StatusCodes.OK).json({ totalItems, items });
};

const addItem = async (req, res) => {
  // since we passed along the userId by adding it in middleware, we can assign it to 'createdBy' and add
  req.body.createdBy = req.user.userId;
  const item = await List.create(req.body);
  res.status(StatusCodes.CREATED).json({ item });
};

const toggleItem = async (req, res) => {
  // new: true - sends back updated job and not previous state
  console.log("inside toggle");
  const updatedItem = await List.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ item: updatedItem });
};

const deleteItem = async (req, res) => {
  const removedItem = await List.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ item: removedItem });
};

export { addItem, deleteItem, getAllItems, toggleItem };
