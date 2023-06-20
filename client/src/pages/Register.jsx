/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Logo, FormRow } from "../components/index";
import logo from "../assets/images/myLogo.svg";

let initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

export const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className="full-page">
      <form css={formCss} className="form" onSubmit={handleSubmit}>
        <Logo cssOverrides={logoCss} />

        <h3 css={h3Css}>{values.isMember ? "Login" : "Register"}</h3>
        {/* {showAlert && <Alert />} */}
        <FormRow
          type="name"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button css={buttonCss} type="button" className="btn btn-block">
          submit
        </button>
        <p css={pCss}></p>
        <button css={memberCss}></button>
      </form>
    </Wrapper>
  );
};

const logoCss = css({
  display: "block",
  margin: "0 auto",
  marginBottom: "1.38rem",
});

const formCss = css({
  maxWidth: "400px",
  borderTop: "5px solid var(--primary-500)",
});

const h3Css = css({
  textAlign: "center",
});
const pCss = css({});
const buttonCss = css({});
const memberCss = css({});

const Wrapper = styled.section({
  display: "grid",
  alignItems: "center",
});
