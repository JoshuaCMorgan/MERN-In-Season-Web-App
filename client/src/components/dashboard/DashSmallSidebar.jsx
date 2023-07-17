/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../../context/appContext";
import { DashNavLinks } from "./DashNavLinks";
import { Logo } from "./../Logo";
import * as mq from "../../styles/media-queries";

export const DashSmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <aside css={asideCss}>
      <div
        css={
          showSidebar
            ? [sidebarContainerCss, showSidebarCss]
            : sidebarContainerCss
        }
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div css={contentCss} className="content">
          <button
            css={closeBtnCss}
            type="button"
            className="close-btn"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <DashNavLinks
            cssLinksOverrides={navLinksCss}
            toggleSidebar={toggleSidebar}
          />
        </div>
      </div>
    </aside>
  );
};

const asideCss = css({
  [mq.small]: {
    display: "none",
  },
});

const sidebarContainerCss = css({
  position: "fixed",
  inset: "0",
  background: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "-1",
  opacity: "0",
  transition: "var(--transition)",
});

const showSidebarCss = css({
  zIndex: "99",
  opacity: "1",
});

const contentCss = css({
  background: "var(--white)",
  width: "var(--fluid-width)",
  height: "95vh",
  borderRadius: "var(--borderRadius)",
  padding: "4rem 2rem",
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

const closeBtnCss = css({
  position: "absolute",
  top: "10px",
  left: "10px",
  background: "transparent",
  borderColor: "transparent",
  fontSize: "2rem",
  color: "var(--red-dark)",
  cursor: "pointer",
});

const navLinksCss = css({
  paddingTop: "2rem",
  display: "flex",
  flexDirection: "column",
});

// const navLinkCss = css({
//   display: "flex",
//   alignItems: "center",
//   color: "var(--grey-500)",
//   padding: "1rem 0",
//   textTransform: "capitalize",
//   transition: "var(--transition)",
//   "&:hover": {
//     color: "var(--primary-500)",
//   },
//   ".active": {
//     color: "var(--grey-900)",
//   },
// });

// const iconCss = css({
//   fontSize: "1.5rem",
//   marginRight: "1rem",
//   display: "grid",
//   placeItems: "center",
//   transition: "var(--transition)",
//   "&:hover": {
//     color: "var(--primary-500)",
//   },
// });

// const activeCss = css({
//   color: "var(--grey-900)",
// });
