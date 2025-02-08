

import { useLocation } from "react-router-dom";
import SubTitle from "../../components/Common/SubTitle";
import Breadcrumb from "../../components/Common/BreadCrumb";
import ImgGrid from "../../components/Common/ImgGrid";
import Image from "../../components/Common/Image";
import Button from "../../components/Common/Button";

export default function SubProduct() {
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
      <div className={`grid grid-cols-1 gap-2 md:grid-cols-2`}>
      {state?.data?.map((item) => (
  <div key={item.id} className="my-5">
    {/* Grid Layout */}
    <div>
      <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 my-2`} />

      {/* Image Section */}
      {item?.items?.length === 1 ? (
        <div className={`${item.header==="Personalized Scarf"?"col-span-1":""}`}>
          <Image img={item.items[0].imgurl} className="w-full h-full" />
        </div>
      ) : (
        <div>
          <ImgGrid data={item?.items} />
        </div>
      )}

      {/* About Section */}
      {item.about && (
        <div className="">
          {item.about.map((desc) => (
            <p key={desc.id} className="my-2 text-gray-700">{desc.description}</p>
          ))}
          {item.features.map((data)=>(
            <div key={data.id}>
            <span className="text-lg text-orange-600 text-bold">{data.title}</span>
            <ul>
            <span>{data.details}</span>
            </ul>
            </div>
          ))

          }
          <div className="flex flex-row gap-4">
                <Button
                  className={'text-[#eb5929] px-6 py-2 rounded-3xl mt-2 border border-[#eb5929]'}
                  text={'Fabric Range'}
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
