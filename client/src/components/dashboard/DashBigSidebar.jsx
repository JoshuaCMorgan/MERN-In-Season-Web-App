/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { useAppContext } from "../../context/appContext";
import { DashNavLinks } from "./DashNavLinks";
import { Logo } from "../Logo";

export const DashBigSidebar = () => {
  // const { showSidebar } = useAppContext();
  return (
    <aside css={asideCss}>
      <h4>big side bar</h4>
      {/* <div
        css={
          showSidebar ? sidebarContainerCSS : [sidebarContainerCSS, showSidebar]
        }
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div css={contentCss} className="content">
          <header css={headerCss}>
            <Logo />
          </header>
          <DashNavLinks cssOverrides={navLinksCss} />
        </div>
      </div> */}
    </aside>
  );
};

const asideCss = css({
  display: "none",
  "@media (min-width: 991px)": {
    display: "block",
    boxShadow: "1px 0px 0px 0px rgba(0, 0, 0, 0.1)",
  },
});

const sidebarContainerCSS = css({
  "@media (min-width: 991px)": {
    background: "var(--white)",
    minHeight: "100vh",
    height: "100%",
    width: "250px",
    marginLeft: "-250px",
    transition: "var(--transition)",
  },
});

const contentCss = css({
  "@media (min-width: 991px)": {
    position: "sticky",
    top: "0",
  },
});

const showSidebarCss = css({
  "@media (min-width: 991px)": {
    marginLeft: "0",
  },
});

const headerCss = css({
  "@media (min-width: 991px)": {
    height: "6rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: "2.5rem",
  },
});

const navLinksCss = css({
  "@media (min-width: 991px)": {
    paddingTop: "2rem",
    display: "flex",
    flexDirection: "column",
  },
});
const navLinkCss = css({
  "@media (min-width: 991px)": {
    display: "flex",
    alignItems: "center",
    color: "var(--grey-500)",
    padding: "1rem 0",
    paddingLeft: "2.5rem",
    textTransform: "capitalize",
    transition: "var(--transition)",
  },
});
const iconCss = css({
  "@media (min-width: 991px)": {
    fontSize: "1.5rem",
    marginRight: "1rem",
    display: "grid",
    placeItems: "center",
    transition: "var(--transition)",
  },
});
const activeCss = css({
  "@media (min-width: 991px)": {
    color: "var(--primary-500)",
  },
});
