/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img css={imgCss} src={img} alt="not-found" className="img" />
        <h3 css={h3Css}>Ohh! Page Not Found</h3>
        <p css={pCss}>We can't seem to find the page you're looking for</p>
        <Link css={linkCss} to="/">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

const imgCss = css({
  maxWidth: "600px",
  display: "block",
  marginBottom: "2rem",
});

const pCss = css({
  marginTop: "0",
  marginBottom: "0.5rem",
  color: "var(--grey-500)",
});

const linkCss = css({
  color: "var(--primary-500)",
  textDecoration: "underline",
  textTransform: "capitalize",
});

const h3Css = css({
  marginBottom: "0.5rem",
});

const Wrapper = styled.main({
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
