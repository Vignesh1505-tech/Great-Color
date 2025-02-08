import React from "react";
import Head from "../../Common/Head";
import { fabricData } from "../../../constants/Demo";
import Image from "../../Common/Image";

export default function Fabric() {
  return (
    <div className="w-[80%] py-12 mx-auto">
      <div>
        {fabricData.map((item, index) => (
          <div key={index}>
            <div>
              <Head
                text={item.header}
                className="text-[30px] my-2 inline-block font-semibold text-[#212529]"
              />
              <p className="border-b-[3px] border-[#D93800] mb-3 w-[8%]"></p>
            </div>
            <div className="grid grid-cols-2 gap-6 my-5 md:grid-cols-4">
              {item.items.map((fabric, fabricIndex) => (
                <div
                  key={fabricIndex}
                  className="h-full bg-gray-100 border-b shadow-lg"
                >
                  <Image
                    img={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full"
                  />
                  <div className="px-4">
                    <h3 className="mt-2 text-xl font-semibold">{fabric.name}</h3>
                    <ul className="p-2">
                      {fabric.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-[16px]">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
