/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import Selections from "../components/Selections";
import produceData from "../produceData";

export const Home = () => {
  const [produce, setProduce] = useState(produceData);

  const fetchData = async (query) => {
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
      <header css={headerCss}>
        <Hero />
        <Filter filterProduce={fetchData} />
      </header>
      <main>
        <Selections produce={produce} />
      </main>
    </React.Fragment>
  );
};

const headerCss = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "25rem",
  marginTop: "70px",
  background: "var(--primary-500)",
  background:
    "linear-gradient(rgba(245, 247, 247, 0.4), rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url('../src/assets/images/fruitsveggies.jpg') center/cover no-repeat",
});
