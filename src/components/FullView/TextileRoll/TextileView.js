import React from "react";
import Head from "../../Common/Head";
import Image from "../../Common/Image";
import Button from "../../Common/Button";
import GridItext from "../../Common/GridItext";
import { fabricData, Textilesections } from "../../../constants/Demo";

const TextilePrinting = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
  <video
    className="absolute top-0 left-0 object-cover w-full h-full"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="https://res.cloudinary.com/do0dujhy5/video/upload/v1738470862/fabric_video_t4frta.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
  <div className="p-6 bg-black bg-opacity-50 rounded-md">
    <h2 className="text-4xl font-bold text-center text-white">Textile Printing Dubai</h2>
  </div>
</div>

      
      {/* Introduction Section */}
    <div>
        <GridItext sections={Textilesections}/>
    </div>
      
      {/* Fabric Types Grid */}
      <div className="w-[80%] py-12 mx-auto">
          <Head text={"Haute Couture"} className="text-[30px] my-2 inline-block font-semibold text-[#212529] " />
                                    <p className="border-b-[3px] border-[#D93800] mb-3 w-[8%]"></p>
        <div className="grid grid-cols-2 gap-6 my-5 md:grid-cols-4">
          {fabricData[0].items.map((fabric, index) => (
            <div key={index} className="h-full bg-gray-100 border-b shadow-lg ">
              <Image img={fabric.image} alt={fabric.name} className={"w-full h-full"} />
              <div className="px-4">
              <h3 className="mt-2 text-xl font-semibold">{fabric.name}</h3>
<div className="p-2">
              {fabric.description.map((item,index)=>(
                <li key={index} className="text-[12px]">{item}</li>
              ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default TextilePrinting;
