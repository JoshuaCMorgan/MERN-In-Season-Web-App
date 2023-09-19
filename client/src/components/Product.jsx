import React from "react";
import Wrapper from "../assets/wrappers/Product";
import { Form, useFetcher } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const Product = ({ name, desc, type }) => {
  const fetcher = useFetcher();

  const handleClick = async () => {
    const data = { name, type, done: false };

    const loginDemoUser = async () => {
      const loginData = {
        email: "test@test.com",
        password: "secret123",
      };

      try {
        await customFetch.post("/auth/login", loginData);
        await customFetch.post("/list", data);
        toast.success(`${name} added successfully`);
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
      }
    };

    try {
      await customFetch.post("/list", data);
      toast.success(`${name} added successfully`);
    } catch (error) {
      let result = loginDemoUser();
      return result;
    }
  };

  return (
    <Wrapper>
      <div className="content">
        <h4>{name}</h4>

        <figure>
          <img src="" alt="" />
        </figure>
        <p className="description">{desc}</p>
        <div className="btn-holder">
          <button type="button" className="btn" onClick={handleClick}>
            Add to Shopping List
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Product;
