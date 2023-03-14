import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { LiveMarketValues } from "../Data/ProductData";

const LiveMarket = () => {
  const [liveMarketValues, setLivemarketValues] = useState<LiveMarketValues[]>(
    []
  );

  useEffect(() => {
    setLivemarketValues([
      {
        title: "Paddy Rice(SPRL)",
        value: 3083459,
      },
      {
        title: "Sorghum (SSGM)",
        value: 3083459,
      },
      {
        title: "Soybean (SBBS)",
        value: 3083459,
      },
      {
        title: "Maize (SMAZ)",
        value: 3083459,
      },
      {
        title: "Cocoa (SCOC)",
        value: 3083459,
      },
      {
        title: "Soybean (SBBS)",
        value: 3083459,
      },
      {
        title: "Soybean (SBBS)",
        value: 3083459,
      },
    ]);
  }, []);
  return (
    <>
      <div className=" w-full h-[55px] bg-white text-black shadow-t-lg flex  justify-between items-center p-2 text-lg fixed mx-auto ml-[90px] bottom-0">
        <div className="bg-black text-white w-40 h-[55px] flex justify-center items-center">
          Live Market
        </div>

        <Marquee speed={100} gradient={false}>
          {liveMarketValues.map((value, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center pb-2 pt-2 text-sm "
              >
                <span className="ml-24 font-semibold">{value.title}</span>
                <span className="ml-24">₦{value.value}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </>
  );
};

export default LiveMarket;
