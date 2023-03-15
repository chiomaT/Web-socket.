import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../PageLayout/Pagelayout";
import cash_balance from "../../Components/Assets/cash_balance_graph.svg";
import securities_values from "../../Components/Assets/securities_value_graph.svg";
import loan_balance from "../../Components/Assets/loan_balance_report.svg";
import page_setting from "../../Components/Assets/page_setting_icon.svg";
import demo from "../../Components/Assets/down_arrow.svg";
import { MonthlyValues } from "../../Components/Data/ProductData";
import BreadCrum from "../BreadCrum/BreadCrum";

const MarketHeader = () => {
  const [monthlyValues, setMonthlyValues] = useState<MonthlyValues[]>([]);

  useEffect(() => {
    setMonthlyValues([
      {
        cashBalance: "Cash Balance",
        cashBalanceValue: 8374763,
        securitiesValue: "Securities Value",
        securitiesValueValue: 8374763,
        loanBalance: "Loan Balance",
        loanBalanceValue: 8374763,
      },
    ]);
  },[]);

  return (
    <>
      <PageLayout />

      <div className="ml-28 pt-8  fixed z-40 bg-[#FAFBFC] container mx-auto px-4 w-full">
      <BreadCrum />

        {/* <Header pageTitle="Market" /> */}
        <div className="flex justify-between pt-11">
          <div>
            <h1 className="text-xl lg:text-xl font-semibold text-[#1F1F1F]">
              Market
            </h1>
            <small className="text-[#5F6D7E]">
              Lorem ipsum dolor sit amet consectetur. Adipiscing egestas{" "}
            </small>
          </div>

          <div className="flex gap-2">
            <div className="border flex gap-2 p-4 rounded-lg cursor-pointer">
              <p>Page setting</p>
              <img src={page_setting} alt="setting" />
            </div>
            <div className="border flex gap-2 p-4 rounded-lg cursor-pointer">
              <p>Demo</p>
              <img src={demo} alt="setting" />
            </div>
          </div>
        </div>

        {monthlyValues.map((value, index) => {
          return (
            <div
              key={index}
              className="my-12 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
            >
              <div
                key={index}
                className="w-[413.67px] h-[144px] bg-[#FFFFFF] rounded-lg border  cursor-pointer flex flex-row items-center justify-center gap-4 p-4"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-lgray group-hover:text-buyellow transition ease-out duration-200">
                    {value.cashBalance}
                  </h3>
                  <span className="text-xl lg:text-3xl font-bold text-lblack group-hover:text-buyellow transition ease-out duration-200">
                  ₦  {value.cashBalanceValue}
                  </span>
                  <div className="flex gap-2">
                    <button className="bg-[#FFF2F0] text-[#E2341D] text-xs rounded-lg py-1 px-3">
                      Decline
                    </button>
                    <p className="text-[#5F6D7E] text-xs">Monitored Monthly</p>
                  </div>
                </div>
                <img src={cash_balance} alt="report" />
              </div>

              <div className="w-[413.67px] h-[144px] bg-[#FFFFFF] rounded-lg border  cursor-pointer flex flex-row items-center justify-center gap-4 ">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-lgray group-hover:text-buyellow transition ease-out duration-200">
                    {value.securitiesValue}
                  </h3>
                  <span className="text-xl lg:text-3xl font-bold text-lblack group-hover:text-buyellow transition ease-out duration-200">
                  ₦ {value.securitiesValueValue}
                  </span>
                  <div className="flex gap-2">
                    <button className="bg-[#FFF2F0] text-[#E2341D] text-xs rounded-lg py-1 px-3">
                      Decline
                    </button>
                    <p className="text-[#5F6D7E] text-xs">Monitored Monthly</p>
                  </div>
                </div>

                <img src={securities_values} alt="report" />
              </div>

              <div className="w-[413.67px] h-[144px] bg-[#FFFFFF] rounded-lg border  cursor-pointer flex flex-row items-center justify-center gap-4 ">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-lgray group-hover:text-buyellow transition ease-out duration-200">
                    {value.loanBalance}
                  </h3>
                  <span className="text-xl lg:text-3xl font-bold text-lblack group-hover:text-buyellow transition ease-out duration-200">
                    ₦ {value.loanBalanceValue}
                  </span>
                  <div className="flex gap-2">
                    <button className="bg-[#F0FAF0] text-[#2D8A39] text-xs rounded-lg py-1 px-3">
                      Increment
                    </button>
                    <p className="text-[#5F6D7E] text-xs">Monitored Monthly</p>
                  </div>
                </div>
                {/* </div> */}
                <img src={loan_balance} alt="report" />
              </div>
            </div>
          );
        })}

        {/* useful Links */}
        <ul className="flex  gap-8 border-b">
          <li>
            <NavLink
              to="/blank"
              className={({ isActive }) =>
                isActive
                  ? "flex  items-center bg-red-600 rounded-lg "
                  : "flex  items-center justify-center hover:border-b border-black hover:pb-4 duration-300"
              }
            >
              Product View
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/marketplace"
              className={({ isActive }) =>
                isActive
                  ? "flex  items-center  border-b border-[#D71E0E] font-bold text-[#D71E0E] pb-4"
                  : "flex  items-center justify-center hover:border-b border-black hover:pb-4 duration-300"
              }
            >
              Order Book
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blank"
              className={({ isActive }) =>
                isActive
                  ? "flex  items-center rounded-lg "
                  : "flex  items-center justify-center hover:border-b border-black hover:pb-4 duration-300"
              }
            >
              Price History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blank"
              className={({ isActive }) =>
                isActive
                  ? "flex  items-center bg-red-600 rounded-lg "
                  : "flex  items-center justify-center gap-2 hover:border-b border-black hover:pb-4 duration-300"
              }
            >
              Open Orders
              <p className="text-[#1F1F1F] bg-gray-200 px-2 rounded-lg hover:bg-black hover:text-white duration-300">
                10
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blank"
              className={({ isActive }) =>
                isActive
                  ? "flex  items-center bg-red-600 rounded-lg "
                  : "flex  items-center justify-center gap-2 hover:border-b border-black hover:pb-4 duration-300"
              }
            >
              Closed Trades
              <p className="text-[#1F1F1F] bg-gray-200 px-2 rounded-lg hover:bg-black hover:text-white duration-300">
                20
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blank"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-2 items-center bg-red-600 rounded-lg "
                  : "flex gap-2 items-center justify-center hover:border-b border-black hover:pb-4 duration-300"
              }
            >
              Canceled Trades
              <p className="text-[#1F1F1F] bg-gray-200 px-2 rounded-lg hover:bg-black hover:text-white duration-300">
                20
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MarketHeader;
