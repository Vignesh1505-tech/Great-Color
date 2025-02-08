import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { beanBags, officeData, Scarfdata } from "../../../constants/Demo";

export default function WindowBrand() {
  const location = useLocation();
  const { state } = location || {};
  let header = location.pathname.replace(/\//g, "");

  if (location.pathname.toLowerCase() === "/") {
    return null;
  }

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .map((x) => decodeURIComponent(x));

  return (
    <div className="px-5 lg:px-28">
      <Breadcrumb />
      <div className={`grid grid-cols-1 gap-5 md:grid-cols-2`}>
      {officeData[1]?.items[0]?.subproduct.map((item, index) => (
          <div key={index} className="my-5">
            <div>
              <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 my-2`} />

              <div>
              {item?.items?.length === 1 ? (
                <div >
                  <Image img={item.items[0].imgurl} className="w-full h-full" />
                  
                </div>
              ) : (
               item.header!== "Cutout Style" && <div>
                  <ImgGrid data={item?.items} />
                </div>
              )}
              </div>

              <div>
                {
                  item.header==="Cutout Style" &&
                  <div className="grid grid-cols-2 gap-5 p-2 my-2">
                    {item.cutout.map((item)=>(
                      <div key={item.id}>
                        <span className="text-xl font-semibold text-black">{item.title}</span>
                        <Image img={item.imgurl} className={"w-72 my-2 h-40 lg:h-56"}/>
                        <span className="italic font-normal text-gray-800 text-md">{item.details}</span>
                      </div>
                    ))}
                  </div>
                }
                </div>

              {item.Specifications && (
                <div className="">
                  {item.Specifications.map((desc) => (
                    <div key={desc.id}>
                        <span className="text-[#eb5929] font-bold text-xl">{desc.title}</span>
                    <p className="my-2 text-gray-700">
                      {desc.details}
                    </p>
                    </div>
                  ))}
                 
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

    </div>
  );
}