/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Outlet, Link } from "react-router-dom";

// import { NavBar, SmallSidebar, BigSidebar } from "../../components";

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/dashboard/profile">profile</Link>
        <Link to="/dashboard/">shopping list</Link>
      </nav>
      <Outlet />
      {/* Outlet: Where nested pages will be displayed */}
    </div>
  );

  // <>
  //   <section>
  //     <main css={dashboardCss} className="dashboard">
  //       <SmallSidebar />
  //       <BigSidebar />
  //       <div>
  //         <NavBar />
  //         <div css={dashboardPageCss} className="dashboard-page">
  //           <Outlet />
  //         </div>
  //       </div>
  //     </main>
  //   </section>
  // </>;
};

const dashboardCss = css({
  display: "grid",
  gridTemplateColumns: "1fr",
  "@media (max-width: 991px)": {
    gridTemplateColumns: "auto 1fr",
  },
});

const dashboardPageCss = css({
  width: "90vw",
  margin: "0 auto",
  padding: "2rem 0",
  "@media (max-width: 991px)": {
    width: "90%",
  },
});
