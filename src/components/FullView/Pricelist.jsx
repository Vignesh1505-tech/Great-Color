import React from "react";
import Multiselect from "../Common/Multiselect";
import Bodytext from "../Common/Bodytext";
import Head from "../Common/Head";
import Button from "../Common/Button";


const Pricelist = ({className ,head,label1,label2,Select1,Select2}) => {
  return (
    <div className={`${className}`}>
      <div className={`${!head ?"hidden":"block"}`}>
        <Head
          text={"Price"}
          className="text-xl my-3 font-semibold text-[#212529] "
        />
        <p className="border-b-[3px] border-[#D93800] mb-3 w-[8%]"></p>
      </div>
      <div className="w-[100%]">
        <Bodytext
          text={label1}
          className="text-[#D93800] font-semibold"
        />
        <Multiselect
          data={Select1}
          className="w-full border-2 mt-1 border-gray-300 px-2 py-1 text-gray-600"
        />
      </div>
      <div className="w-[100%] mt-3">
        <Bodytext text={label2} className="text-[#D93800] font-semibold" />
        <Multiselect
          data={Select2}
          className="w-full focus:outline-blue-400 focus:outline focus:outline-2 border-2 mt-1 border-gray-300 px-2 py-1 text-gray-600"
        />
      </div>

      <div className="my-3">
        <p className="text-[#D93800] font-medium text-xl">
          <span className="text-black">Total : </span>AED {0} (Excl. VAT){" "}
        </p>
      </div>

      <div className={` ${!head ?"hidden":"block"} border-2 border-[#d3d2d2] mt-5 `}>
        <Bodytext
          text={"Features"}
          className="bg-[#F3F3F3] py-1 pl-4 font-semibold"
        />
        <div className="p-4 ">
          <li className="text-[#212836]">400 gsm Smooth white card</li>
          <li>Matt Finish</li>
          <li>Premium look and feel</li>
        </div>
      </div>

      <div className={`${!head ?"hidden":"block"} flex gap-5 mt-[3%] ml-[2%]`}>
        <div className="bg-[#D93800] rounded-3xl hover:bg-black">
          <Button text={"Order Now"} className="text-white px-4 py-2" />
        </div>
        <div className="border-[#343A40] border-2 rounded-3xl hover:bg-[#343A40] hover:text-white">
          <Button text={"Templates"} className=" px-5 py-2" />
        </div>
        <div className="border-[#343A40] border-2 rounded-3xl hover:bg-[#343A40] hover:text-white">
          <Button text={"Generate QR code"} className="px-5 py-2" />
        </div>
      </div>
    </div>
  );
};

export default Pricelist;
