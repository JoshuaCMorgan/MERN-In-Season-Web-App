/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import heroImg from "../assets/images/fruitsveggies.jpg";

const Hero = () => {
  return (
    <section css={heroCss} className="hero" id="home">
      <div css={heroBannerCss} className="hero-banner">
        <h1 css={h1Css}>What's In Season: </h1>
        <div className="scroll-container">
          <p css={pCss}>...in your state</p>
          <p css={pCss}>...right now</p>
          <p css={pCss}>...at your market</p>
        </div>
      </div>
    </section>
  );
};

const pCss = css({
  maxWidth: "35rem",
  marginLeft: "auto",
  marginRight: "auto",
  color: "var(--black)",
  letterSpacing: "var(--spacing)",
});
const heroCss = css({
  /* height: clamp(10rem, 2.2414rem + 33.1034vw, 25rem); */
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const heroBannerCss = css({
  textAlign: "center",
  color: "var(--clr-white)",
  padding: "1rem",
  background: "white",
  borderRadius: "25px",
});

const h1Css = css({
  textTransform: "uppercase",
});

export default Hero;
