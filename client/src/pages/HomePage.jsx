import Wrapper from "../assets/wrappers/Home.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Hero, Filter, Selections } from "../components";

import produceData from "../produceData.jsx";

const HomePage = () => {
  const [produce, setProduce] = useState(produceData);

  const fetchData = async (query) => {
    console.log(query);
    try {
      const response = await axios.get("/api/v1/produce", { params: query });
      console.log(response);
      setProduce(response.data.produce);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <Wrapper>
        <Hero />
        <Filter filterProduce={fetchData} />
      </Wrapper>
      <main>
        <Selections produce={produce} />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
