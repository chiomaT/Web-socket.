import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/company_logo.svg";
import market_place from "../../Assets/marketplace_icon.svg";
import dashboard from "../../Assets/dashboard_icon.svg";
import portfolio from "../../Assets/wallet_icon.svg";
import community from "../../Assets/community_icon.svg";
import reports from "../../Assets/reports_icon.svg";
import settings from "../../Assets/settings_icon.svg";
import logout from "../../Assets/logout_icon.svg";
const Navigation = () => {
  return (
    <div className="bg-[#ffffff] w-[98px] shadow-lg h-screen overflow-auto scrollbar-hide fixed top-0 bottom-0 z-50">
     {/* <div> */}
      <div className="py-4 pt-7">
        <img className="w-full h-[38px]" src={logo} alt="Logo" />
      </div>

      <div className="h-full px-6 flex flex-col justify-between py-4">
        <div>
          <nav>
            <ul className="flex flex-col gap-8 ">
              <li>
                <NavLink
                  to=""
                  className="flex  items-center justify-center w-[48px] h-[48px]"
                >
                  <img src={dashboard} alt="market _icon" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/marketplace"
                  className={({ isActive }) =>
                    isActive
                      ? "flex  justify-center items-center bg-[#F3F9FE] rounded-lg w-[48px] h-[48px]"
                      : "flex  items-center justify-center w-[48px] h-[48px] "
                  }
                >
                  <img src={market_place} alt="market _icon" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to=""
                  className="flex  items-center justify-center w-[48px] h-[48px]"
                >
                  <img src={portfolio} alt="market _icon" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to=""
                  className="flex  items-center justify-center w-[48px] h-[48px] "
                >
                  <img src={community} alt="market _icon" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to=""
                  className="flex  items-center justify-center w-[48px] h-[48px] "
                >
                  <img src={reports} alt="market _icon" />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className=" pt-12">
            <ul className="flex flex-col gap-8">
              <li>
                <NavLink
                  to=""
                  className="flex  items-center justify-center w-[48px] h-[48px] "
                >
                  <img src={settings} alt="market _icon" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    isActive
                      ? "flex  items-center bg-red-600 rounded-lg "
                      : "flex  items-center justify-center w-[48px] h-[48px] "
                  }
                >
                  <img src={logout} alt="market _icon" />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navigation;
