const addItem = async (req, res) => {
  res.send("add list item");
};

const deleteItem = async (req, res) => {
  res.send("delete list item");
};

const getAllItems = async (req, res) => {
  res.send("get all list items");
};

const showItems = async (req, res) => {
  res.send("show list Items");
};

export { addItem, deleteItem, getAllItems, showItems };
