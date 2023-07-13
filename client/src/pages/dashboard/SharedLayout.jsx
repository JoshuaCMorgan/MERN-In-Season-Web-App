/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import {
  DashNavbar,
  DashSmallSidebar,
  DashBigSidebar,
} from "../../components/dashboard";

export const SharedLayout = () => {
  return (
    <>
      <section>
        <main css={dashboardCss} className="dashboard">
          <DashSmallSidebar />
          <DashBigSidebar />
          <div>
            <DashNavbar />
            <div css={dashboardPageCss} className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

const dashboardCss = css({
  display: "grid",
  gridTemplateColumns: "1fr",
  "@media (min-width: 991px)": {
    gridTemplateColumns: "auto 1fr",
  },
});

const dashboardPageCss = css({
  width: "90vw",
  margin: "0 auto",
  padding: "2rem 0",
  "@media (min-width: 991px)": {
    width: "90%",
  },
});
