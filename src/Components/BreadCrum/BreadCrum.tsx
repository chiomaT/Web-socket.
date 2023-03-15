import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import arrowRight from "../../Components/Assets/Arrow (1).svg";

const routes = [
  { path: "/marketplace", breadcrumb: "Market" },

];

const BreadCrum = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  const location = useLocation();

  return (
    <nav>
            
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink
          key={match.pathname}
          to={match.pathname}
          className={
            match.pathname === location.pathname
              ? "text-[#E2341D] font-semibold "
              : "text-[#8C8680]"
          }
        >
          <div className="inline-flex gap-2 text-left justify-start ">
            {breadcrumb} {<img src={arrowRight} className="" alt="" />} 
          </div>
        </NavLink>
      ))}
          
    </nav>
  );
};

export default BreadCrum;
