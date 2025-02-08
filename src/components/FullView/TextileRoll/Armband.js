import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { ArmbandData } from "../../../constants/Demo";

export default function Armband() {
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
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
        {ArmbandData.map((item, index) => (
          <div key={index} className={`my-5 ${ item.header === "Fabrics" ? 'lg:col-span-2' : ''}`}>
            {/* Grid Layout */}
            <div>
              <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 my-2`} />

              {/* Image Section */}
              <div>
              {item?.items?.length === 1 ? (
                <div >
                    <div>
                    {item.header==="How to measure" &&
                    <div className="p-1">
                        {item.content.map((data)=>(
                            <li key={data.id}>{data.details}</li>
                        ))}
                    </div>
                    }
                    </div>
                  <Image img={item.items[0].imgurl} className={`${item.header==="How to measure"?"w-72 my-2 h-60 border p-1":'w-full h-full'}`} />
                  
                </div>
              ) : (
                <div>
                  <ImgGrid data={item?.items} />
                </div>
              )}
              </div>
              {item.header === "Arm Band" && (
  <div className="overflow-x-auto">
    <table className="min-w-full text-left border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border border-gray-300">Size Category</th>
          <th className="p-2 border border-gray-300">Width</th>
          <th className="p-2 border border-gray-300">Bicep size (cms)</th>
        </tr>
      </thead>
      <tbody>
        {/* Youth Size Header */}
        <tr className="bg-gray-100">
          <td className="p-2 font-semibold border border-gray-300" colSpan="3">
            Youth Size
          </td>
        </tr>
        {item.table1[0].column1.map((_, index) => (
          <tr key={index} className="border border-gray-300">
            <td className="p-2 border border-gray-300">
              {item.table1[0].column1[index].value}
            </td>
            <td className="p-2 border border-gray-300">
              {item.table1[1].column2[index].value}
            </td>
            <td className="p-2 border border-gray-300">
              {item.table1[2].column3[index].value}
            </td>
          </tr>
        ))}

        {/* Adult Size Header */}
        <tr className="bg-gray-100">
          <td className="p-2 font-semibold border border-gray-300" colSpan="3">
            Adult Size
          </td>
        </tr>
        {item.table2[0].column1.map((_, index) => (
          <tr key={index} className="border border-gray-300">
            <td className="p-2 border border-gray-300">
              {item.table2[0].column1[index].value}
            </td>
            <td className="p-2 border border-gray-300">
              {item.table2[1].column2[index].value}
            </td>
            <td className="p-2 border border-gray-300">
              {item.table2[2].column3[index].value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
                <div className="p-2 ">
                  {item.about.map((desc) => (
                    <p key={desc.id} className="my-2 text-gray-700">
                      {desc.description}
                    </p>
                  ))}
                  <div className="my-2">
                  {item.product_specs?.map((data) => (
                    <div key={data.id} className="my-1">
                      <span className="text-lg font-bold text-orange-600">{data.title}</span>
                      <ul >
                        <li>{data.details}</li>
                      </ul>
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
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full bg-gray-300"></div>
    </div>
  );
}