/** @jsxImportSource @emotion/react */
import { jsx, css, Global } from "@emotion/react";
import { dashboardLinks } from "../../utils/linksUtil";
import { NavLink } from "react-router-dom";

export const DashNavLinks = ({ cssLinksOverrides, toggleSidebar }) => {
  return (
    <div css={cssLinksOverrides} className="nav-links">
      <Global
        styles={css`
          .nav-link {
            display: flex;
            align-items: center;
            color: var(--grey-500);
            padding: 1rem 0;
            padding-left: 2.5rem;
            text-transform: capitalize;
            transition: var(--transition);
          }
          .icon {
            font-size: 1.5rem;
            margin-right: 1rem;
            display: grid;
            place-items: center;
            transition: var(--transition);
          }
          .nav-link:hover {
            background: var(--grey-50);
            padding-left: 3rem;
            color: var(--grey-900);
          }
          .nav-link:hover .icon {
            color: var(--primary-500);
          }
          .active {
            color: var(--grey-900);
          }
          .active .icon {
            color: var(--primary-500);
          }
        `}
      />
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
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
