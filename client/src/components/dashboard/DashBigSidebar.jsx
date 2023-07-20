import Wrapper from "../../assets/wrappers/BigSidebar";
import { useAppContext } from "../../context/appContext";
import { DashNavLinks } from "./DashNavLinks";
import { Logo } from "../Logo";

export const DashBigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <DashNavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
