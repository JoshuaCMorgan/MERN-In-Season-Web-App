import Produce from "../models/Produce.js";

const getAllProduceStatic = async (req, res) => {
  const { state, type, month } = req.query;
  console.log({ state, type, month });
  const queryObject = {};
  let states;

  if (state && state.length === 2 && !month) {
    states = "states." + state;
    queryObject[states] = { $exists: true };
  }

  if (month && state && state.length === 2) {
    let [mm, dd] = month.split("/");
    let season = mm * 2;
    if (dd <= 15) {
      season -= 1;
    }

    states = "states.AL.seasons";
    queryObject[states] = season;
  }

  if (!type || type === "Any Produce") {
    // select all documents in `produce` collection where the `type` field value equals either 'Fruit', 'Vegetable', 'Herb', or 'Legume'
    queryObject.type = { $in: ["Fruit", "Vegetable", "Herb", "Legume", "Nut"] };
  } else {
    queryObject.type = type;
  }

  console.log({ queryObject });
  const produce = await Produce.find(queryObject);

  res.status(200).json({ produce, nbHits: produce.length });
};

const getAllProduce = async (req, res) => {
  const { state } = req.query;
  const queryObject = {};
  console.log(req.query);
  const produce = await Produce.find(req.query);
  console.log(produce);
  res.status(200).json({ msg: "testing" });
};

export { getAllProduce, getAllProduceStatic };
