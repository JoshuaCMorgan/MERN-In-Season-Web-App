/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../../context/appContext";
import { Logo } from "../Logo";
import * as mq from "../../styles/media-queries";

export const DashNavbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, toggleSidebar, logoutUser } = useAppContext();

  return (
    <nav css={navbarCss}>
      <div css={navCenterCss} className="nav-center">
        <button
          css={toggleBtnCss}
          type="button"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo cssOverrides={logoCss} />
          <h3 css={logoTextCss} className="logo-text">
            dashboard
          </h3>
        </div>

        <div css={btnContainerCss} className="btn-container">
          <button
            type="button"
            css={btnCss}
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            css={showLogout ? [dropdownCss, showDropdownCss] : dropdownCss}
            className={showLogout ? "dropdown, show-dropdown" : "dropdown"}
          >
            <button
              type="button"
              css={dropdownBtnCss}
              className="dropdown-btn"
              onClick={logoutUser}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const navbarCss = css({
  height: "var(--nav-height)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 1px 0px 0px rgba(0, 0, 0, 0.1)",
  background: "var(--white)",

  [mq.small]: {
    position: "sticky",
    top: "0",
  },
});

const logoCss = css({
  display: "flex",
  alignItems: "center",
  width: "275px",
  [mq.small]: {
    display: "none",
  },
});

const navCenterCss = css({
  display: "flex",
  width: "90vw",
  alignItems: "center",
  justifyContent: "space-between",

  [mq.small]: {
    width: "90%",
  },
});

const toggleBtnCss = css({
  background: "transparent",
  borderColor: "transparent",
  fontSize: "1.75rem",
  color: "var(--primary-500)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

const btnContainerCss = css({
  position: "relative",
});

const btnCss = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0 0.5rem",
  position: "relative",
  boxShadow: "var(--shadow-2)",
});

const dropdownCss = css({
  position: "absolute",
  top: "40px",
  left: "0",
  width: "100%",
  background: "var(--primary-100)",
  boxShadow: "var(--shadow-2)",
  padding: "0.5rem",
  textAlign: "center",
  visibility: "hidden",
  borderRadius: "var(--borderRadius)",
});

const showDropdownCss = css({
  visibility: "visible",
});

const dropdownBtnCss = css({
  background: "transparent",
  borderColor: "transparent",
  color: "var(--primary-500)",
  letterSpacing: "var(--letterSpacing)",
  textTransform: "capitalize",
  cursor: "pointer",
});

const logoTextCss = css({
  display: "none",
  margin: "0",
  [mq.small]: {
    display: "block",
  },
});
