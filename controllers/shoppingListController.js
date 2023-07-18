const addItem = async (req, res) => {
  res.send("create item");
};

const deleteItem = async (req, res) => {
  res.send("delete item");
};

const showItems = async (req, res) => {
  res.send("show item");
};

export { addItem, deleteItem, showItems };
