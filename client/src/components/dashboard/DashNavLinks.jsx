import { dashboardLinks } from "../../utils/linksUtil";
import { NavLink } from "react-router-dom";

export const DashNavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {dashboardLinks.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
