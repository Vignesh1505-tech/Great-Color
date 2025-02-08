import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { Scarfdata } from "../../../constants/Demo";

export default function Scarf() {
  const location = useLocation();
  const { state } = location || {};

  console.log(state)

  return (
    <div className="px-5 lg:px-28">
      <Breadcrumb />
      <div className={`grid grid-cols-1 gap-2 md:grid-cols-2`}>
        {Scarfdata.map((item, index) => (
          <div
            key={index}
            className={`my-5 ${item.header === "Personalized Scarf"|| item.header === "Fabrics" ? 'lg:col-span-2' : ''}`}
          >
            {/* Grid Layout */}
            <div>
              <SubTitle title={item.header} className={`mx-1 my-2`} />

              {/* Image Section */}
              {item?.items?.length === 1 ? (
                <div>
                  <Image
                    img={item.items[0].imgurl}
                    className="object-fill h-40 w-full lg:h-[400px]"
                  />
                 <div className="my-4 border shadow-sm">
  {item.items[0]?.content?.map((data) => (
    <div 
      key={data.id} 
      className={`p-1 ${data.title ? "bg-gray-300 font-semibold" : ""}`}
    >
      {data.title ? (
        <div>{data.title}</div>
      ) : (
        <ul className="pl-5 list-disc">
          <li>{data.details}</li>
        </ul>
      )}
    </div>
  ))}
</div>

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
              {/* About Section */}
              {item.about && (
                <div className="gap-5 ">
                  {item.about.map((desc) => (
                    <p key={desc.id} className="my-5 text-gray-700">
                      {desc.description}
                    </p>
                  ))}
                  {item.features?.map((data) => (
                    <div key={data.id}>
                      <span className="text-lg font-bold text-orange-600">{data.title}</span>
                      <ul>
                        <li>{data.details}</li>
                      </ul>
                    </div>
                  ))}
                  <div className="flex flex-row gap-4 my-2">
                    <Button
                      className={'text-white px-6 py-2 rounded-3xl mt-2 border bg-[#eb5929]'}
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
