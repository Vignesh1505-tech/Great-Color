import React, { useState } from "react";
import Head2text from "../Common/Head2text";
import Bodytext from "../Common/Bodytext";

const Submenu = ({ data, title }) => {
  const [hoveredImage, setHoveredImage] = useState("");

 
console.log(data)

  return (
    <div className="flex flex-col gap-8 p-8 lg:flex-row">
    {/* Sidebar */}
    <div className="w-full lg:w-1/3">
      {data?.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="mb-4 text-lg font-bold">{category.header}</h3>
          <ul className="space-y-2">
            {category.items.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-blue-600"
                onMouseEnter={() => setHoveredImage(item.imgurl)}
                onMouseLeave={() => setHoveredImage("")}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Image Display */}
    <div className="w-full lg:w-2/3">
      {hoveredImage ? (
        <div className="relative flex items-center justify-center w-full h-64 bg-gray-200">
          <img
            src={hoveredImage}
            alt="Hovered Item"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      ) : (
        <div className="relative flex items-center justify-center w-full h-64 text-gray-500 bg-gray-100">
          Hover over an item to preview its image
        </div>
      )}
    </div>
  </div>
  );
};

export default Submenu;
