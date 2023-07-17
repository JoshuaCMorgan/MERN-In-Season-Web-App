/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useAppContext } from "../../context/appContext";
import { DashNavLinks } from "./DashNavLinks";
import { Logo } from "../Logo";
import * as mq from "../../styles/media-queries";

export const DashBigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <aside css={asideCss}>
      <div
        css={
          showSidebar
            ? sidebarContainerCSS
            : [sidebarContainerCSS, showSidebarCss]
        }
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div css={contentCss} className="content">
          <header css={headerCss}>
            <Logo cssOverrides={logoCss} />
          </header>
          <DashNavLinks cssOverrides={navLinksCss} />
        </div>
      </div>
    </aside>
  );
};

const logoCss = css({
  display: "flex",
  alignItems: "center",
  width: "225px",
  // [mq.small]: {
  //   display: "none",
  // },
});

const asideCss = css({
  display: "none",
  [mq.small]: {
    display: "block",
    boxShadow: "1px 0px 0px 0px rgba(0, 0, 0, 0.1)",
  },
});

const sidebarContainerCSS = css({
  [mq.small]: {
    background: "var(--white)",
    minHeight: "100vh",
    height: "100%",
    width: "250px",
    marginLeft: "-250px",
    transition: "var(--transition)",
  },
});

const contentCss = css({
  [mq.small]: {
    position: "sticky",
    top: "0",
  },
});

const showSidebarCss = css({
  [mq.small]: {
    marginLeft: "0",
  },
});

const headerCss = css({
  [mq.small]: {
    height: "6rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
  },
});

const navLinksCss = css({
  [mq.small]: {
    paddingTop: "2rem",
    display: "flex",
    flexDirection: "column",
  },
});
// const navLinkCss = css({
//   [mq.small]: {
//     display: "flex",
//     alignItems: "center",
//     color: "var(--grey-500)",
//     padding: "1rem 4rem",
//     paddingLeft: "2.5rem",
//     textTransform: "capitalize",
//     transition: "var(--transition)",
//   },
// });
const iconCss = css({
  [mq.small]: {
    fontSize: "1.5rem",
    marginRight: "1rem",
    display: "grid",
    placeItems: "center",
    transition: "var(--transition)",
  },
});
const activeCss = css({
  [mq.small]: {
    color: "var(--primary-500)",
  },
});
