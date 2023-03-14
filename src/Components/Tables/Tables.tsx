import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ScrollTable = ({ children }: Props) => {
  return (
    <div className="py-4 rounded-lg">
      <div
        className=" overflow-sroll "
      >
        <table className="table-auto w-full border h-full  ">{children}</table>
      </div>
    </div>
  );
};

export const ScrollTableHead = ({ children }: Props) => {
  return (
    <thead className=" border-b sticky top-0 z-30  ">
      <tr className="bg-white scrollTableHead pl-3 pr-6 py-2 text-left flex justify-between text-[#5F6D7E] font-bold ">
        {children}
      </tr>
    </thead>
  );
};

export const ScrollTableBody = ({ children }: Props) => {
  return <tbody className=" bg-white text-left border-b">{children}</tbody>;
};
