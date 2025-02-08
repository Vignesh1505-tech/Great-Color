import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { SashData } from "../../../constants/Demo";

export default function Sash() {
  const location = useLocation();
  let header = location.pathname.replace(/\//g, "");

  if (location.pathname.toLowerCase() === "/") {
    return null;
  }


  return (
    <div className="px-5 my-2 lg:px-28">
      <Breadcrumb />
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2`}>
        {SashData.map((item, index) => (
          <div key={index} className={` ${item.header==="Fabrics"||item.header==="Finishing"?"lg:col-span-2":""}`}>
            {/* Grid Layout */}
            <div>
              <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 my-2`} />

              {/* Image Section */}
              {item?.items?.length === 1 ? (
                <div className={`${item.header==="Finishing"?"grid gap-5  grid-cols-1 lg:grid-cols-3":""}`}>
              
              <div>
{item.header==="Finishing"&&              <SubTitle title={item.items[0].title} className={`my-2`} />
}                  <Image img={item.items[0].imgurl} className="w-[100%] h-40 object-fill lg:h-[400px]" />
                  </div>
                  <div>
                  {item.items1 &&
                  <>
                                <SubTitle title={item.items1[0].title} className={`my-2`} />
                  <ImgGrid data={item?.items1} />
                  </>}

                  </div>
                  <div>
                  {item.items3 &&
                  <>
                                <SubTitle title={item.items3[0].title} className={`my-2`} />

                  <ImgGrid data={item?.items3} />
                  </>}
                  </div>
                </div>
              ) : (
                <div  >
                    
                  <ImgGrid data={item?.items} />
                 
                </div>
              )}
               
                 {
                   item.Fabitems && (
                      <div className="grid grid-cols-1 gap-6 my-5 md:grid-cols-3">
                               {item.Fabitems.map((fabric, index) => (
                                 <>
                 
                                 <div key={index} >
                                 <SubTitle title={fabric.title} className={` mb-2`} />
                                 <div className="h-auto bg-gray-100 border-2 shadow-lg ">
                                   <Image img={fabric.imgurl} alt={fabric.name} className={"w-full h-full"} />
                                   <div className="px-4">
                                   <h3 className="mt-2 text-xl font-semibold">{fabric.title}</h3>
                     <div className="p-2">
                                   {fabric.content.map((item,index)=>(
                                     <li key={index} className="text-[14px]">{item.details}</li>
                                   ))}
                                   </div>
                                   </div>
                                   </div>
                                 </div>
                                 </>
                               ))}
                             </div>
                   )
                 }               

              {/* About Section */}

              {item.about && (
                <div className="">
                    <div className="p-2">
                  {item.about.map((desc) => (
                    <p key={desc.id} className="mx-2 my-1 text-gray-700">
                      {desc.description}
                    </p>
                  ))}
                  
                  <div className="px-2 my-1">

                  {item.content?.map((data) => (
                    <div key={data.id}>
                      {data.title?<span className="text-lg font-bold text-orange-600">{data.title}</span>:
                      <ul className="pl-5 list-disc">
                        <li>{data.details}</li>
                      </ul>}
                    </div>
                  ))}
                  </div>
                  <div className="px-2 my-2">

                  {item.common_sies?.map((data) => (
                    <div key={data.id}>
                      {data.title?<span className="text-lg font-bold text-orange-600">{data.title}</span>:
                      <ul className="pl-5 list-disc">
                        <li>{data.details}</li>
                      </ul>}
                    </div>
                  ))}
                  </div>
                  </div>
                  
                  <div className="flex flex-row gap-4">
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