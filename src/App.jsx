import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import Selections from "./components/Selections";
import produceData from "./produceData";

const App = () => {
  const [produce, setProduce] = useState(produceData);

  function filterProduce(query) {
    let produceByType = produceData.reduce((accum, currentItem) => {
      let { type } = query;
      if (type === "Any Produce") {
        accum.push(currentItem);
      } else if (currentItem.type === type) {
        accum.push(currentItem);
      }
      return accum;
    }, []);

    let produceByTypeState = produceByType.reduce((accum, currentItem) => {
      let { state } = query;
      if (state.length > 2) {
        accum.push(currentItem);
      } else if (currentItem.states[state]) {
        accum.push(currentItem);
      }

      return accum;
    }, []);

    let produceByTypeStateMonth = produceByTypeState.reduce(
      (accum, currentItem) => {
        let { month, state } = query;
        let monthInt = Number(month);
        if (month === "Any Month") {
          accum.push(currentItem);
        } else if (state.length > 2) {
          accum.push(currentItem);
        } else if (currentItem.states[state].seasons.includes(monthInt)) {
          accum.push(currentItem);
        }
        return accum;
      },
      []
    );

    setProduce(produceByTypeStateMonth);
  }

  return (
    <React.Fragment>
      <Navbar />
      <header>
        <Hero />
        <Filter filterProduce={filterProduce} />
      </header>
      <main>
        <Selections produce={produce} />
      </main>
    </React.Fragment>
  );
};
export default App;
