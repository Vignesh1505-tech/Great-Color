import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { DecorativePillow } from "../../../constants/Demo";

export default function DecorPillow() {
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
      <div className={`grid grid-cols-1 gap-3 md:grid-cols-2`}>
        {DecorativePillow.map((item, index) => (
          <div key={index}             className={`my-5 ${ item.header === "Fabrics" ? 'lg:col-span-2' : ''}`}
>

            <div>
              <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 my-2`} />

              {item?.items?.length === 1 ? (
                <div>
                  <Image img={item.items[0].imgurl} className="w-full h-full" />
                </div>
              ) : (
                <div>
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

              {item.about && (
                <div className="p-2 ">
                  {item.about.map((desc) => (
                    <p key={desc.id} className="my-2 text-gray-700">
                      {desc.description}
                    </p>
                  ))}

                  {item.common_sizes && (
                    <div className="p-2 my-4">
                      <span className="text-lg font-bold text-orange-600">Common Sizes</span>
                      <table className="w-full mt-2 border border-collapse border-gray-300">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="p-2 border border-gray-300">Square Pillow</th>
                            <th className="p-2 border border-gray-300">Rectangular Pillow</th>
                            <th className="p-2 border border-gray-300">Round (Dia)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.common_sizes[0].column1.map((square, index) => (
                            <tr key={square.id}>
                              <td className="p-2 border border-gray-300">{square.value}</td>
                              <td className="p-2 border border-gray-300">{item.common_sizes[1]?.column2[index]?.value || "-"}</td>
                              <td className="p-2 border border-gray-300">{item.common_sizes[2]?.column2[index]?.value || "-"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                 

                  <div className="flex flex-row gap-4 p-4">
                    <Button
                      className={'text-[#ffffff] px-6 py-2 rounded-3xl mt-2 border bg-[#eb5929]'}
                      text={'Order now'}
                    />
                    <Button
                      className={'text-[#eb5929] px-6 py-2 rounded-3xl mt-2 border border-[#eb5929]'}
                      text={'Pattern'}
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
