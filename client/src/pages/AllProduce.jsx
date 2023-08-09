import Wrapper from "../assets/wrappers/Home.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Hero, FilterContainer, ProduceContainer } from "../components";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);
  try {
    const { data } = await customFetch.get("/produce", {
      params,
    });
    return { data, filterValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllProduceContext = createContext();

const AllProduce = () => {
  const { data, filterValues } = useLoaderData();
  // console.log(data);
  return (
    <>
      <Navbar />
      <AllProduceContext.Provider value={{ data, filterValues }}>
        <Wrapper>
          <Hero />
          <FilterContainer />
        </Wrapper>
        <ProduceContainer />
      </AllProduceContext.Provider>
    </>
  );
};

export const useAllProduceContext = () => useContext(AllProduceContext);
export default AllProduce;
