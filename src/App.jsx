import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filter from "./components/Filter";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <header>
        <Hero />
        <Filter />
      </header>
    </React.Fragment>
  );
};
export default App;
