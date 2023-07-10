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
    console.log({ query });
    try {
      const response = await axios.get("/api/v1/produce", { params: query });
      console.log(response);
      setProduce(response.data.produce);
    } catch (error) {
      console.log(error);
    }
  };

  // function filterProduce(query) {
  //   let { type, month, state } = query;
  //   console.log({ type, month, state });
  //   let produceByType = produceData.reduce((accum, currentItem) => {
  //     if (type === "Any Produce") {
  //       accum.push(currentItem);
  //     } else if (currentItem.type === type) {
  //       accum.push(currentItem);
  //     }
  //     return accum;
  //   }, []);

  //   let produceByTypeState = produceByType.reduce((accum, currentItem) => {
  //     let { state } = query;
  //     if (state.length > 2) {
  //       accum.push(currentItem);
  //     } else if (currentItem.states[state]) {
  //       accum.push(currentItem);
  //     }

  //     return accum;
  //   }, []);

  //   let produceByTypeStateMonth = produceByTypeState.reduce(
  //     (accum, currentItem) => {
  //       if (month === null) {
  //         accum.push(currentItem);
  //         return accum;
  //       }
  //       let [mm, dd] = month.format("MM/DD").split("/");
  //       let season = mm * 2;
  //       if (dd <= 15) {
  //         season -= 1;
  //       }
  //       console.log({ season, dd, state });
  //       if (state.length > 2) {
  //         accum.push(currentItem);
  //       } else if (currentItem.states[state].seasons.includes(season)) {
  //         accum.push(currentItem);
  //       }
  //       return accum;
  //     },
  //     []
  //   );

  //   setProduce(produceByTypeStateMonth);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <React.Fragment>
      <Navbar />
      <header>
        <Hero />
        <Filter filterProduce={fetchData} />
      </header>
      <main>
        <Selections produce={produce} />
      </main>
    </React.Fragment>
  );
};
