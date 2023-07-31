import Wrapper from "../../assets/wrappers/SharedLayout.js";
import { Outlet } from "react-router-dom";

import {
  DashNavbar,
  DashSmallSidebar,
  DashBigSidebar,
} from "../../components/dashboard";

export const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <DashSmallSidebar />
          <DashBigSidebar />
          <div>
            <DashNavbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};
