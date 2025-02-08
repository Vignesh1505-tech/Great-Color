import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { beanBags, officeData, Scarfdata } from "../../../constants/Demo";

export default function ReposionableCling() {
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
      {officeData[3]?.items[0]?.subproduct.map((item, index) => (
          <div key={index} className={`my-5 ${item.header==="To Apply"?"col-span-2":""}`}>
            <div>
              <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 my-2`} />

              {
                 item?.items?.length === 1 && 
                    <div >
                      <Image img={item.items[0].imgurl} className="w-full h-full" />
                      
                    </div>
              }

{item.Apply &&
                        <div className="flex flex-row items-center gap-10">
                        {item?.Apply?.map((item) => (
                          <div key={item.id}>
                                          <SubTitle title={item.title} className={`mx-1 my-2`} />
                            <Image img={item.imgurl} className={"w-full my-2 h-full"} />
                            <p className="my-2 text-gray-700">
                      {item.details}
                    </p>
                          </div>
                        ))}
                        </div>
                    }


{item.About && (
                <div >
                    <div className="border border-gray-200">
                  {item.About.map((desc) => (
                    <div key={desc.id}>
                        <div className="items-center w-full h-8 bg-gray-200 border-b-2">
                        <span className="text-[#000] p-2 font-semibold text-md">{desc.title}</span>
                        </div>
                        <div className="p-3">
                        {desc.content.map((data)=>(
                            <div  className="mb-5" key={data.id}>
                                <li>{data.label}</li>
                            </div>
                        ))
                        }
                    </div>
                    </div>
                  ))}
                  </div>
                 
                  <div className="flex flex-row gap-4 my-2">
                    <Button
                      className={'text-[#fff] px-6 py-2 rounded-3xl mt-2 border bg-[#eb5929]'}
                      text={'Order now'}
                    />
                   
                  </div>
                </div>
              )}
                


              {item.Specifications && (
                <div className="">
                  {item.Specifications.map((desc) => (
                    <div key={desc.id}>
                        <span className="text-[#312e2e] font-medium text-lg">{desc.title}</span>
                    <p className="my-2 text-gray-700">
                      {desc.details}
                    </p>
                    </div>
                  ))}
                  <div>
                    
  {
    <div >
              <SubTitle title={"Cutout Style"} className={`mx-1 my-2`} />
<div className="flex flex-row items-center gap-10">
      {item?.custom?.map((item) => (
        <div key={item.id}>
                                    <span className="text-[#312e2e] text-center font-medium text-lg">{item.title}</span>
          <Image img={item.imgurl} className={"w-full my-2 h-full"} />
        </div>
      ))}
      </div>
    </div>
  }
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

    </div>
  );
}