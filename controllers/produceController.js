// const Product = require("../models/product");

const getAllProduceStatic = async (req, res) => {
  res.status(200).json({ msg: "testing" });
};

const getAllProduce = async (req, res) => {
  res.status(200).json({ msg: "testing" });
};

export { getAllProduce, getAllProduceStatic };
