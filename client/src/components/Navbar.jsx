/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../assets/images/myLogo.svg";
import * as mq from "../styles/media-queries";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav css={navCss}>
      <div css={navCenterCss} className="nav-center">
        <div css={navHeaderCss} className="nav-header">
          <img css={logoCss} src={logo} className="logo" alt="logo" />
          <button
            css={navToggleCss}
            className="nav-toggle"
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          css={linksContainerCss}
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul css={linksCss} className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a css={linksACss} href={url}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
const logoCss = css({
  height: "40px",
});

const linksCss = css({
  [mq.navSmall]: {
    display: "flex",
    gap: "1.5rem",
  },
});
const linksAHoverCss = css({
  background: "var(--primary-100)",
  color: "var(--primary-500)",
  paddingLeft: "1.5rem",
  [mq.navSmall]: {
    background: "transparent",
    paddingLeft: "0",
  },
});

const linksACss = css({
  display: "block",
  padding: "0.5rem 1rem",
  color: "var(--grey-700)",
  fontSize: "1rem",
  textTransform: "capitalize",
  letterSpacing: "var(--letterSpacing)",
  transition: "var(--transition)",
  "&:hover": linksAHoverCss,
  [mq.navSmall]: {
    padding: "0",
  },
});

const linksContainerCss = css({
  overflow: "hidden",
  transition: "var(--transition)",
  backgroundColor: "var(--white-transparent)",
  [mq.navSmall]: {
    height: "auto !important",
    padding: "5px",
  },
});

const navCss = css({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  zIndex: "2",
  background: "var(--white)",
  boxShadow: "var(--dark-shadow)",
});

const navCenterCss = css({
  [mq.navSmall]: {
    maxWidth: "1170px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
  },
});

const navHeaderCss = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
  [mq.navSmall]: {
    padding: "0",
  },
});

const navHoverCss = css({
  color: "var(--primary-700)",
  transform: "rotate(90deg)",
});

const navToggleCss = css({
  fontSize: "1.5rem",
  color: "var(--primary-500)",
  background: "transparent",
  borderColor: "transparent",
  transition: "var(--transition)",
  cursor: "pointer",
  "&:hover": navHoverCss,
  [mq.navSmall]: {
    display: "none",
  },
});
