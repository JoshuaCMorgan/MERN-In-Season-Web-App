import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import ProduceQuery from "./components/ProduceQuery";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <header>
        <Hero />
        <Filter />
      </header>
      <main>
        <ProduceQuery />
      </main>
    </React.Fragment>
  );
};
export default App;
