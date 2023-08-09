import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Lists from "../models/ListModel.js";

/*
When user logs in, we are not storing user value in the front-end on the client when user logs in. It's stored in JWT in the cookie that is sent to browser. Therefore, we need a way to get the user's data
*/

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  // convert to JSON since we converted to Object to delete password
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const items = await Lists.countDocuments();
  res.status(StatusCodes.OK).json({ users, items });
};

export const updateUser = async (req, res) => {
  // we don't want password inside this functionality--don't want to update it in this way
  const obj = { ...req.body };
  delete obj.password;

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "updated user" });
};
