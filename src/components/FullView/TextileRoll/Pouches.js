import { useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { PouchesData } from "../../../constants/Demo";
import { FaArrowDown } from "react-icons/fa";
import { ArrowDropDown } from "@mui/icons-material";

export default function Pouches() {
  const location = useLocation();
  let header = location.pathname.replace(/\//g, "");

  // State to track active tab for each ImgGrid component
  const [activeTabs, setActiveTabs] = useState(
    PouchesData.reduce((acc, _, index) => {
      acc[index] = "header"; // Set all initially to "header"
      return acc;
    }, {})
  );

  // Function to handle tab change for ImgGrid only
  const handleTabChange = (index, tab) => {
    setActiveTabs((prevTabs) => ({
      ...prevTabs,
      [index]: tab,
    }));
  };

  if (location.pathname.toLowerCase() === "/") {
    return null;
  }

  return (
    <div className="px-5 my-2 lg:px-28">
      <Breadcrumb />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PouchesData.map((item, index) => (
          <div key={index}>
            {/* Section Title */}
            <SubTitle title={item.header !== "" ? item.header : header} className="mx-1 my-2" />
          
            {/* Image Section */}
            <div>
              {item?.items?.length === 1 ? (
                <Image img={item.items[0].imgurl} className="w-[100%] h-40 object-fill lg:h-[400px]" />
              ) : (
                <div className="border border-gray-200">
                  {/* Tabs for ImgGrid */}
                 { item.header!=="About" && <div className="flex border-b border-gray-300">
                    <button
                      className={`px-4 py-2 w-[50%] shadow-md font-semibold ${
                        activeTabs[index] === "header" ? "border-b-4 border-orange-500 text-orange-600" : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange(index, "header")}
                    >
                      {item.header} <ArrowDropDown/>
                    </button>
                    <button
                      className={`px-4 py-2 w-[50%] shadow-md font-semibold ${
                        activeTabs[index] === "Fabric" ? "border-b-4 border-orange-500 text-orange-600" : "text-gray-600"
                      }`}
                      onClick={() => handleTabChange(index, "Fabric")}
                    >
                      Fabric <ArrowDropDown/>
                    </button>
                  </div>}

                  {/* Display Image Grid or Fabric Content based on active tab */}
                  {activeTabs[index] === "header" ? (
                    <div className="p-2">
                    <ImgGrid data={item?.items} />
                    </div>
                  ) : (
                    item.Fabric && (
                      <div className="h-auto p-1 bg-gray-100 border-2 shadow-lg">
                        <Image img={item.Fabric[0].imgurl} alt={item.Fabric[0].name} className="w-full h-full" />
                        <div className="px-4">
                          <div className="p-2">
                            {item.Fabric[0].content.map((fabricItem, idx) => (
                              <li key={idx} className="text-[14px]">
                                {fabricItem.details}
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {item.about && (
              <div>
                <div className="p-2">
                  {item.about.map((desc) => (
                    <p key={desc.id} className="mx-2 my-2 text-gray-700">
                      {desc.description}
                    </p>
                  ))}

                  
                </div>

                {/* Buttons for About Section */}
                <div className="flex flex-row gap-4">
                  <Button
                    className="text-[#fff] px-6 py-2 rounded-3xl border bg-[#eb5929]"
                    text="Order Now"
                    onClick={() => console.log(`Order Now for ${item.header}`)}
                  />
                
                </div>
              </div>
            )}

            {/* About Section with Buttons */}
            
          </div>
        ))}
      </div>
    </div>
  );
}
