/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import logo from "../assets/images/myLogo.svg";

export const Logo = ({ cssOverrides }) => {
  return <img css={cssOverrides} src={logo} alt="logo" />;
};
