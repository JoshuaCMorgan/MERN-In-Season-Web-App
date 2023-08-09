import ProduceModel from "../models/ProduceModel.js";

const getAllProduce = async (req, res) => {
  const { state, type, month } = req.query;
  console.log(req.query);
  const queryObject = {};
  let states;

  if (state && state.length === 2) {
    states = "states." + state;
  }

  if (month && state && state.length === 2) {
    let [mm, dd] = month.split("/");
    let season = mm * 2;

    if (dd <= 15) {
      season -= 1;
    }

    states = states.concat(".seasons");
    queryObject[states] = season;
  } else {
    queryObject[states] = { $exists: true };
  }

  if (type && type !== "Any Produce") {
    queryObject.type = type;
  }

  const produce = await ProduceModel.find(queryObject);

  res.status(200).json({ produce, nbHits: produce.length });
};

export { getAllProduce };
