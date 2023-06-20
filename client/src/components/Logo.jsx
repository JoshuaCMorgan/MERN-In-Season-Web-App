/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import logo from "../assets/images/myLogo.svg";

export const Logo = ({ cssOverrides }) => {
  console.log({ cssOverrides });
  return <img css={cssOverrides} src={logo} alt="logo" />;
};
