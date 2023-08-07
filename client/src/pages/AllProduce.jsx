import Wrapper from "../assets/wrappers/Home.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Hero, FilterContainer, Selections } from "../components";

import produceData from "../produceData.jsx";
import customFetch from "../utils/customFetch.js";

const AllProduce = () => {
  const [produce, setProduce] = useState(produceData);

  const fetchData = async (query) => {
    console.log(query);
    try {
      const response = await customFetch.get("/produce", { params: query });

      setProduce(response.data.produce);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Hero />
        <FilterContainer />
      </Wrapper>
      <Selections produce={produce} />
    </>
  );
};

export default AllProduce;
