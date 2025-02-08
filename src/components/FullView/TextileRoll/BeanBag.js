import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { beanBags, Scarfdata } from "../../../constants/Demo";

export default function BeanBag() {
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
        {beanBags.map((item, index) => (
          <div key={index} className="my-5">
            {/* Grid Layout */}
            <div>
              <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 my-2`} />

              {/* Image Section */}
              <div>
              {item?.items?.length === 1 ? (
                <div className={`${item.header === "Personalized Scarf" ? "col-span-2" : ""}`}>
                  <Image img={item.items[0].imgurl} className="w-full h-full" />
                  
                </div>
              ) : (
                <div>
                  <ImgGrid data={item?.items} />
                </div>
              )}
              </div>

              {/* About Section */}
              {item.about && (
                <div className="">
                  {item.about.map((desc) => (
                    <p key={desc.id} className="my-2 text-gray-700">
                      {desc.details}
                    </p>
                  ))}
                  <div className="my-2">
                  {item.available?.map((data) => (
                    <div key={data.id} className="my-1">
                      <span className="text-lg font-bold text-orange-600">{data.title}</span>
                      <ul >
                        <li>{data.details}</li>
                      </ul>
                    </div>
                  ))}
                  </div>
                  <div className="my-2">

                  {item.common_sizes?.map((data) => (
                    <div key={data.id}>
                      <span className="text-lg font-bold text-orange-600">{data.title}</span>
                      <ul>
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