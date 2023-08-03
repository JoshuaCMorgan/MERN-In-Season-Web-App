import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";

const BigSidebar = () => {
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
            <NavLinks isBigSidebar />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
