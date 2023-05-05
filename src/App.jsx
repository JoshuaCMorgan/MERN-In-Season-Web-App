import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import Selections from "./components/Selections";
import produceData from "./produceData";

const App = () => {
  const [produce, setProduce] = useState(produceData);

  const filterProduce = (query) => {
    console.log({ query });
    const newSelection = produceData.filter((produce) => {
      let { state } = query;
      return produce.states[state];
    });
    // console.log(newSelection);
    setProduce(newSelection);
  };
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
