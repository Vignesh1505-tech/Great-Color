import React, { useEffect, useState } from "react";
import Bodytext from "../Common/Bodytext";
import { Link, useNavigate } from "react-router-dom";

export default function Submenu({ data, title, setNav }) {
  const [hoveredImage, setHoveredImage] = useState("");
  // Initialize the hoveredImage with the first available item
  useEffect(() => {
    if (data && data.length > 0) {
      const firstItem = data[0]?.items?.[0];
      const secondItem = data[1]?.items?.[0];
      setHoveredImage(firstItem?.title ? firstItem : secondItem);
    }
  }, [data]);

  // Handle hover for headers
  const handleHeaderClick = (header) => {
    const foundHeader = data?.find((item) => item.header === header);
    if (foundHeader) {
      setHoveredImage(foundHeader);
    }
  };

  // Handle navigation reset
  const handleNav = () => {
    setNav("");
  };



  return (
    <div className="flex flex-col w-full gap-2 px-1 lg:px-24 lg:p-5">
      {/* Title Link */}
      <Link to={`/${title}`} state={ {data:data} } onClick={handleNav}>
        <h2 className="text-[15px] tracking-wide font-bold text-orange-400 cursor-pointer">
          {title}
        </h2>
      </Link>

      {/* Submenu Content */}
      <div className="flex flex-row h-[120%] gap-5">
        {/* Left Section */}
        <div className="flex flex-col flex-wrap w-full gap-4">
          {data?.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {/* Header Link */}
              <Link to={item.header==="Textile Roll"?"/Fashion/Textile Roll":`/${title}`} state={ {data:data} }  onClick={handleNav}>
                <h3
                  onMouseEnter={() => handleHeaderClick(item.header)}
                  className="text-[15px] tracking-wide text-black font-bold hover:text-orange-400 cursor-pointer"
                >
                  {item.header}
                </h3>
              </Link>

              {/* Products */}
              <div className="flex flex-row flex-wrap gap-3 lg:items-start lg:flex-col">
                {item.items.map((product) => (
                  <div
                    className="flex flex-col items-center justify-center w-20 h-auto lg:w-auto"
                    key={product.id}
                  >
                    {/* Product Image (hidden on large screens) */}
                    <img
                      src={product.imgurl}
                      alt="Preview"
                      className="flex object-cover w-20 h-20 mb-2 lg:hidden"
                    />

                    {/* Product Title */}
                    {item.header!=="Repositionable Cling" && item.header!=="Floor Sticker"&&<Link 
to={product.path ? product.path.replace(/:(id|data)/, encodeURIComponent(product.title)) : `/${title}/${product.title}`}
onClick={handleNav} 
  state={{ data: product }}
>
                    
                    <p
                      className={`lg:mx-1 mx-0 ${
                        product?.title !== "" ? "flex" : "hidden"
                      } lg:text-[14px] text-[10px] lg:leading-relaxed lg:tracking-wide text-[#333333] cursor-pointer hover:text-orange-400`}
                      onMouseEnter={() => setHoveredImage(product)}
                    >
                      {product.title}
                    </p>
                    </Link>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Image Preview */}
        <div className="flex-col items-center hidden lg:flex">
          <div className="relative flex flex-col items-center justify-center w-64 h-auto bg-white shadow-md rounded-b-md">
            <img
              src={
                hoveredImage?.items
                  ? hoveredImage.items[0]?.imgurl
                  : hoveredImage?.imgurl
              }
              alt="Preview"
              className="object-cover w-64 h-64"
            />
            <Bodytext
              className="p-2 text-black font-semibold text-[15px]"
              text={hoveredImage?.header || hoveredImage?.title || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
