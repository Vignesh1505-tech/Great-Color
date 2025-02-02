import React from "react";
import Head2text from "../Common/Head2text";

const TablePrice = ({ data, title, Specifications }) => {
  return (
    <div className="relative   sm:rounded-lg ">
      <div>
        <Head2text
          text={title}
          className="text-xl text-black mb-1 font-semibold"
        />
        <p className="border-b-[4px] border-[#D93800] mb-3 w-[12%]"></p>
      </div>

      <table className="w-full text-sm text-left border-collapse">
        <thead className="text-xs uppercase bg-[#F3F3F3]">
          <tr>
            <th
              scope="col"
              className="px-2 py-3 border-2 text-black font-bold border-[#c3c1c1] text-left"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="px-2 py-3 border-2 border-[#c3c1c1] text-left"
            >
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white">
              <td className="px-2 py-4 border-2  border-[#c3c1c1]">
                {item.quantity}
              </td>
              <td className="px-2 py-4 border-2 border-[#c3c1c1]">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-full text-sm text-left mt-[3%] border-collapse border-2 border-[#c3c1c1]">
        <thead className="text-xs uppercase bg-[#F3F3F3]">
          <tr className="">
            <th
              scope="col"
              className="w-full px-2 py-3 border-2 text-black font-bold border-[#c3c1c1] borde text-left"
            >
              Specifications
            </th>
          </tr>
        </thead>
        <tbody>
          {Specifications.map((item) => (
            <tr className="bg-white">
              <td className="px-2 py-1 ">
                <storng className="text-black font-bold">{item.label} :</storng>
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePrice;
