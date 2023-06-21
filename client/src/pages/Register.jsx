/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export function Register() {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <FormWrapper className="full-page">
      <form css={formCss} className="form" onSubmit={onSubmit}>
        <Logo cssOverrides={logoCss} />
        <h3 css={h3Css}>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {values.isMember && (
          <FormRow
            type="name"
            value={values.name}
            name="name"
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />

        <button css={btnCss} type="submit" className="btn btn-block">
          submit
        </button>
        <p css={pCss}>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            css={memberBtnCss}
            type="button"
            onClick={toggleMember}
            className="member-btn"
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div({
  display: "grid",
  alignItems: "center",
});

const formCss = css({
  maxWidth: "400px",
  borderTop: "5px solid var(--primary-500)",
  lineHeight: "1.75",
});

const logoCss = css({
  display: "block",
  margin: "0 auto",
  marginBottom: "1.38rem",
});

const pCss = css({
  margin: "0",
  marginTop: "1rem",
  textAlign: "center",
});

const btnCss = css({
  marginTop: "1rem",
});

const memberBtnCss = css({
  background: "transparent",
  border: "transparent",
  color: "var(--primary-500)",
  cursor: "pointer",
  letterSpacing: "var(--letterSpacing)",
  padding: "1px 6px",
});

const h3Css = css({
  textAlign: "center",

  marginBottom: `1.38rem`,
});
