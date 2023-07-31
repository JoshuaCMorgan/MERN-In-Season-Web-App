import Wrapper from "../assets/wrappers/BigSidebar";
import DashNavLinks from "./DashNavLinks";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";

const DashBigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div>
          <div className="content">
            <header>
              <Logo />
            </header>
            <DashNavLinks isBigSidebar />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default DashBigSidebar;
