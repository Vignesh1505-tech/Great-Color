
import React, { useEffect, useState } from "react";
import Bodytext from "../Common/Bodytext";

export default function Submenu({ data, title }) {
  const [hoveredImage, setHoveredImage] = useState("");

  useEffect(()=>{
if(data){
  if(data[0]?.items[0]?.title !== ""){
  setHoveredImage(data[0]?.items[0])
  }else{
    setHoveredImage(data[1]?.items[0])
  }
}
  },[data])


  const handleHeaderClick = (header) => {
    const foundHeader = data.find((item) => item.header === header);
    if (foundHeader) {
      // const emptyTitleItem = foundHeader.items.find((item) => !item.title);
      // console.log(foundHeader)
      // if (emptyTitleItem) {
        setHoveredImage(foundHeader);
      // }
    }
  };
  



  


  return (
    <div className="flex flex-col w-full gap-2 p-5">
      <h2  className="text-[15px] tracking-wide font-bold text-orange-400 cursor-pointer">
        {title}
      </h2>
      <div className="flex flex-row h-[120%] gap-5">
        <div className="flex flex-col flex-wrap w-full gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3  onMouseEnter={() => handleHeaderClick(item.header)} className="text-[15px] tracking-wide text-black font-bold hover:text-orange-400 cursor-pointer">
                {item.header}
              </h3>
              {item.items.map((products) => (
                <p
                  key={products.id}
                  className={`mx-1 ${products?.title!==""?"flex":"hidden"} leading-relaxed tracking-wide text-gray-400 cursor-pointer hover:text-orange-400`}
                  onMouseEnter={() => setHoveredImage(products)}
                >
                  {products.title}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          
            <div className="relative flex flex-col items-center justify-center w-64 h-auto bg-white shadow-md rounded-b-md">
              <img
                src={hoveredImage.items?hoveredImage.items[0].imgurl:hoveredImage.imgurl}
                alt="Preview"
                className="object-cover w-64 h-64"
              />
              <Bodytext className={" p-2 text-black font-semibold text-[15px]"} text={hoveredImage?.header||hoveredImage?.title}/>
            </div>
          
        </div>
      </div>
    </div>
  );
}
