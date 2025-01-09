import React from 'react'

const TablePrice = ({data}) => {
  return (
    <div className="relative  sm:rounded-lg w-[20%]">
      <h1></h1>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="text-xs uppercase bg-[#F3F3F3]">
          <tr>
            <th scope="col" className="px-2 py-3 border-2 text-black font-bold border-[#c3c1c1] text-left">
              Quantity
            </th>
            <th scope="col" className="px-2 py-3 border-2 border-[#c3c1c1] text-left">
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white">
              <td className="px-2 py-4 border-2  border-[#c3c1c1]">{item.quantity}</td>
              <td className="px-2 py-4 border-2 border-[#c3c1c1]">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePrice
