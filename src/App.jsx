import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import Selection from "./components/Selection";
import produceData from "./produceData";

const App = () => {
  const [produce, setProduce] = useState(produceData);

  const filterProduce = (curcat) => {
    const newItem = produceData.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <React.Fragment>
      <Navbar />
      <header>
        <Hero />
        <Filter filterProduce={filterProduce} />
      </header>
      <main>
        <Selection produce={produce} />
      </main>
    </React.Fragment>
  );
};
export default App;
