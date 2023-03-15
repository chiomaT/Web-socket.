import React, { useState, useEffect } from "react";
import Cipher from "@ibnlanre/cipher";
import {
  ScrollTable,
  ScrollTableBody,
  ScrollTableHead,
} from "../../Components/Tables/Tables";
import MarketHeader from "../../Components/MarketHeader/MarketHeader";

const MarketPlace = () => {
  const [data, setData] = useState<any>([]);
  const [stateResult, setStateReult] = useState<any[]>([])

  const cipher = new Cipher({
    initialization_vector: "hA7wB3e4v87ihj6R",
    algorithm: "aes-256-cbc",
    output_decoding: "base64",
    input_encoding: "utf-8",
    encryption_key: "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0",
  });
const { decrypt } = cipher;

useEffect(() => {
if(data.length > 0) {
  console.log("Res",data)
  let result:any[] =[]
  data.forEach((item:any) => {
    const cid = decrypt(item.cid)
    const tid =decrypt(item.tid)
    const securityCode=decrypt(item.security_code)
    const commodityCode =decrypt(item.commodity_code)
    const units =decrypt(item.units)
    const orderType=decrypt(item.order_type)
    const boardType =decrypt(item.board_type)
    const orderPrice = decrypt(item.order_price)
    const matchedQuantity =decrypt(item.matched_qty)
    const status =decrypt(item.status)
    const securityType = decrypt(item.security_type)
    const securityLocation = decrypt(item.security_location_code)
    let obj={
      cid,
      tid,
      securityCode,
      commodityCode,
      units,
      orderType,
      boardType,
      orderPrice,
      matchedQuantity,
      status,
      securityType,
      securityLocation
    }
 result.push(obj)
  })
console.log("Response",result)
  setStateReult(result)
}
},[data,decrypt])

  useEffect(() => {
 const socket = new WebSocket('wss://comx-sand-api.afex.dev/stream/trades');
socket.addEventListener('message', (event) => {
    console.log('Message from server ', JSON.parse(event.data));
    let response=JSON.parse(event.data)
    setData(response.messages);
});
  },[]);

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
                {stateResult?.map((buyProduct, index) => (
                  <tr
                    key={index}
                    className=" border-b flex justify-between text-sm pl-3 pr-6 py-4"
                  >
                    <td className="w-[60px]">{}</td>
                    <td className="w-[60px]">{buyProduct.matchedQuantity}</td>
                    <td className="text-[#2D8A39] w-[60px]">
                      {buyProduct.orderPrice}
                    </td>
                    <td className="bg-[#F0FAF0] text-[#2D8A39] px-2 rounded-lg w-[60px] text-center cursor-pointer">
                      {}
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
                {stateResult?.map((sellProduct, index) => (
                  <tr
                    key={index}
                    className=" border-b flex justify-between text-sm pl-3 pr-6 py-4"
                  >
                    <td className="w-[60px]">{}</td>
                    <td className="w-[60px]">{sellProduct.matchedQuantity}</td>
                    <td className="text-[#E2341D] w-[60px]">
                      {sellProduct.orderPrice}
                    </td>
                    <td className="bg-[#FFF2F0] text-[#E2341D]  rounded-lg w-[60px] text-center cursor-pointer">
                      {}
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
              {stateResult.map((tradeLog, index) => (
                <tr
                  key={index}
                  className=" border-b flex flex-start justify-between  text-sm pl-3 pr-6 py-4 text-left"
                >
                  <td className="w-24">{}</td>
                  <td className="w-24">{}</td>
                  <td className="w-24">{}</td>
                  <td className="w-32">{tradeLog.orderPrice}</td>
                  <td className="w-24">{tradeLog.matchedQuantity}</td>
                  <td className="w-24">{}</td>
                  <td className="w-24">{}</td>
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
