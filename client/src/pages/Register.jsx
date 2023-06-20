/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Logo, FormRow, Alert } from "../components/index";
import logo from "../assets/images/myLogo.svg";

let initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  showAlert: false,
};

export const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
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
        {values.showAlert && <Alert />}
        {values.isMember && (
          <FormRow
            type="name"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
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
        <p css={pCss}>
          {" "}
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} css={memberCss}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
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
const pCss = css({
  margin: "0",
  marginTop: "1rem",
  textAlign: "center",
});
const buttonCss = css({
  marginTop: "1rem",
});
const memberCss = css({
  background: "transparent",
  border: "transparent",
  color: "var(--primary-500)",
  cursor: "pointer",
  letterSpacing: "var(--letterSpacing)",
  padding: "1px 6px",
});

const Wrapper = styled.section({
  display: "grid",
  alignItems: "center",
});
