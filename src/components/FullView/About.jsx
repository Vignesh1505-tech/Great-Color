import React from "react";
import Head from "../Common/Head";
import Button from "../Common/Button";

const About = ({head,data}) => {
  return (
    <div>
      <div className={``}>
        <Head
          text={data[0]?.Header}
          className={` text-xl my-2 inline-block font-semibold text-[#212529] `}
        />
        <p className={`border-b-[4px] border-[#D93800] mb-3 w-[8%] ${!head ?"hidden":"block"}`}></p>
      </div>
      <div>
       {data?.map((item)=>(
        <div>
          <p className="mt-[2%]">{item?.text}</p>
        </div>
       ))}
        <div className="mt-[2%]">
          <Button text={"Order Now"} className={`${!head ?"hidden":"block"} text-white px-4 py-2 text-center bg-[#D93800] rounded-3xl hover:bg-black`} />
        </div>
      </div>
    </div>
  );
};

export default About;
