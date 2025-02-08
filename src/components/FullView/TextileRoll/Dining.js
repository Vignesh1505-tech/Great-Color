import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { DiningTable } from "../../../constants/Demo";

export default function Dining() {
  const location = useLocation();
  let header = location.pathname.replace(/\//g, "");
  const valid = ["Regular","Rayon Linen","Organza"  ]

  if (location.pathname.toLowerCase() === "/") {
    return null;
  }


  return (
    <div className="px-5 my-2 lg:px-28">
      <Breadcrumb />
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
        {DiningTable.map((item, index) => (
          <div key={index}>
            {/* Grid Layout */}
            <div>
            {item.header1&& <SubTitle title={item.header1} className={`mx-1  my-2`} />}

              <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 ${valid.includes(item.header) ? "mt-12" : ""} my-2`} />

              {/* Image Section */}
              {item?.items?.length === 1 ? (
                <div>

<div className="border shadow-sm">
                  <Image img={item.items[0].imgurl} className="w-full h-full" />
                  {item.items[0].content?.map((data) => (
                    <div className="p-2" key={data.id}>
                      <ul>
                        <li>{data.details}</li>
                      </ul>
                    </div>
                  ))}
                  </div>
                </div>
              ) : (
                <div>
                    
                  <ImgGrid data={item?.items} />
                </div>
              )}

              {/* About Section */}

              {item.about && (
                <div className="">
                    <div className="p-2 border">
                  {item.about.map((desc) => (
                    <p key={desc.id} className="mx-2 my-2 text-gray-700">
                      {desc.description}
                    </p>
                  ))}
                  
                  <div className="p-2 my-2">

                  {item.common_sizes?.map((data) => (
                    <div key={data.id}>
                      <span className="text-lg font-bold text-orange-600">{data.title}</span>
                      <ul className="pl-5 list-disc">
                        <li>{data.details}</li>
                      </ul>
                    </div>
                  ))}
                  </div>
                  </div>
                  
                  <div className="flex flex-row gap-4 my-2">
                    <Button
                      className={'text-[#fff] px-6 py-2 rounded-3xl mt-2 border bg-[#eb5929]'}
                      text={'Order now'}
                    />
                   
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full bg-gray-300"></div>
    </div>
  );
}