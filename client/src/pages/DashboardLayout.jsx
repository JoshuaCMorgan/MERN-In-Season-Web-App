import { Outlet } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { DashboardNavbar, BigSidebar, SmallSidebar } from "../components";

const DashboardContext = createContext();

const DashboardLayout = () => {
  // temp
  const user = { name: "josh" };
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <DashboardNavbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
