import React from "react";
import Navigation from "../Common/Navigation/Navigation";
import LiveMarket from "../LiveMarket/LiveMarket";

const PageLayout = () => {
  return (
    <div className="w-full  bg-[#FAFBFC] relative flex">
      <Navigation />
      <LiveMarket />
    </div>
  );
};

export default PageLayout;
