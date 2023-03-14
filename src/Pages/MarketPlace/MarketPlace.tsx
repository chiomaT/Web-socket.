import React, { useState, useEffect } from "react";
import Cipher from "@ibnlanre/cipher";
// import Manager from "../../Utils/encryption.js";
import {
  ScrollTable,
  ScrollTableBody,
  ScrollTableHead,
} from "../../Components/Tables/Tables";

import {
  BuyProducts,
  SellProducts,
  TradeLog,
} from "../../Components/Data/ProductData";
import MarketHeader from "../../Components/MarketHeader/MarketHeader";

const MarketPlace = () => {
  const [buyProducts, setBuyProducts] = useState<BuyProducts[]>([]);
  const [sellProducts, setSellProducts] = useState<SellProducts[]>([]);
  const [tradeLog, setTradeLog] = useState<TradeLog[]>([]);


  const [data, setData] = useState<any>({});

  const cipher = new Cipher({
    initialization_vector: "hA7wB3e4v87ihj6R",
    algorithm: "aes-256-cbc",
    output_decoding: "base64",
    input_encoding: "utf-8",
    encryption_key: "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0",
  });

  const { decrypt } = cipher;
  if (data?.cash_cover) {
    console.log("he", data.cash_cover);
    const decryptedData = decrypt(data.cash_cover );

    console.log("response",  decryptedData );
    // const value = data.map((item:any) => decrypt(item.board_type))
    // console.log("value", value)
  }

  // useEffect(() => {}, [data]);

  useEffect(() => {
    // const cipher = new Cipher({
    //      initialization_vector:process.env.REACT_APP_VECTOR as string,
    //      algorithm: "aes-256-cbc",
    //      output_decoding: "base64",
    //      input_encoding: "utf-8",
    //      encryption_key:process.env.REACT_APP_KEY as string,
    //    });

    const orderBookSocket = new WebSocket(
      "wss://comx-sand-api.afex.dev/stream/client-positions?cid=9900153747"
    );

    orderBookSocket.onmessage = function (event) {
      let res = JSON.parse(event.data);

      setData(res);
    };
  }, []);

  useEffect(() => {
    setBuyProducts([
      {
        product: "SoyBeans(SSSBS)",
        quantity: 2003,
        price: 647139,
        action: "Buy",
      },
    ]);

    setSellProducts([
      {
        product: "SoyBeans(SSSBS)",
        quantity: 2003,
        price: 647139,
        action: "Sell",
      },
    ]);

    setTradeLog([
      {
        security: "SoyBeans(SSSBS)",
        board: "X-Traded",
        orderType: "Sell",
        matchedPrice: 1792.65,
        quantity: 2003,
        date: "17,oct,2020",
        time: "07.38",
      },
      {
          security: "SoyBeans(SSSBS)",
          board: "X-Traded",
          orderType: "Sell",
          matchedPrice: 1792.65,
          quantity: 2003,
          date: "17,oct,2020",
          time: "07.38",
        },
        {
          security: "SoyBeans(SSSBS)",
          board: "X-Traded",
          orderType: "Sell",
          matchedPrice: 1792.65,
          quantity: 2003,
          date: "17,oct,2020",
          time: "07.38",
        },
        {
          security: "SoyBeans(SSSBS)",
          board: "X-Traded",
          orderType: "Sell",
          matchedPrice: 1792.65,
          quantity: 2003,
          date: "17,oct,2020",
          time: "07.38",
        },
       
      
    ]);

  }, []);

  return (
    <>
      <MarketHeader />
      <div className="mt-[30%] h-screen container mx-auto px-4 w-full items-center ">
        <div className="flex justify-between ">
          {/* buy products */}
          <div className="w-[600px]">
            <ScrollTable>
              <ScrollTableHead>
                <th className="py-3 text-black ">Buy Board</th>
              </ScrollTableHead>

              <ScrollTableHead>
                  <th className="w-[60px]">Product</th>
                  <th className="w-[60px]">Quantity</th>
                  <th className="w-[60px]">Price</th>
                  <th className="w-[60px]">Action</th>
              </ScrollTableHead>

              <ScrollTableBody>
                {buyProducts?.map((buyProduct, index) => (
                  <tr key={index} className=" border-b flex justify-between text-sm pl-3 pr-6 py-4">
                    <td className="w-[60px]">{buyProduct.product}</td>
                    <td className="w-[60px]">{buyProduct.quantity}</td>
                    <td className="text-[#2D8A39] w-[60px]">{buyProduct.price}</td>
                    <td className="bg-[#F0FAF0] text-[#2D8A39] px-2 rounded-lg w-[60px] text-center cursor-pointer">
                      {buyProduct.action}
                    </td>
                  </tr>
                ))}
              </ScrollTableBody>
            </ScrollTable>
          </div>
          
          {/* sell products */}
          <div className="w-[600px]">
            <ScrollTable>
              <ScrollTableHead>
                <th className="text-black py-3">Sell Board</th>
              </ScrollTableHead>

              <ScrollTableHead>
                  <th className="w-[60px]">Product</th>
                  <th className="w-[60px]">Quantity</th>
                  <th className="w-[60px]">Price</th>
                  <th className="w-[60px]">Action</th>
              </ScrollTableHead>

              <ScrollTableBody>
                {sellProducts?.map((sellProduct, index) => (
                  <tr
                    key={index}
                    className=" border-b flex justify-between text-sm pl-3 pr-6 py-4"
                  >
                    <td className="w-[60px]">{sellProduct.product}</td>
                    <td className="w-[60px]">{sellProduct.quantity}</td>
                    <td className="text-[#E2341D] w-[60px]">{sellProduct.price}</td>
                    <td className="bg-[#FFF2F0] text-[#E2341D]  rounded-lg w-[60px] text-center cursor-pointer">
                      {sellProduct.action}
                    </td>
                  </tr>
                ))}
              </ScrollTableBody>
            </ScrollTable>
          </div>
        </div>

        {/* trade log */}
       <div className="w-full">
          <ScrollTable>
            <ScrollTableHead>
              <th className="text-black py-3">Trade Log</th>
            </ScrollTableHead>

            <ScrollTableHead>
                <th className="w-24">Security</th>
                <th className="w-24">Board</th>
                <th className="w-24">Order Type</th>
                <th className="w-32">Matched Price</th>
                <th className="w-24">Quantity</th>
                <th className="w-24">date</th>
                <th className="w-24">Time</th>
            </ScrollTableHead>
            <ScrollTableBody>
              {tradeLog.map((tradeLog, index) => (
                <tr
                  key={index}
                  className=" border-b flex flex-start justify-between  text-sm pl-3 pr-6 py-4 text-left"
                >
                  <td className="w-24">{tradeLog.security}</td>
                  <td className="w-24">{tradeLog.board}</td>
                  <td className="w-24">{tradeLog.orderType}</td>
                  <td className="w-32">{tradeLog.matchedPrice}</td>
                  <td className="w-24">{tradeLog.quantity}</td>
                  <td className="w-24">{tradeLog.date}</td>
                  <td className="w-24">{tradeLog.time}</td>
                </tr>
              ))}
            </ScrollTableBody>
          </ScrollTable>
        </div>
        </div>

    </>
  );
};

export default MarketPlace;
