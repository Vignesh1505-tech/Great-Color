import { useLocation } from "react-router-dom";

import Breadcrumb from "../../Common/BreadCrumb";
import SubTitle from "../../Common/SubTitle";
import Image from "../../Common/Image";
import ImgGrid from "../../Common/ImgGrid";
import Button from "../../Common/Button";
import { beanBags, officeData, Scarfdata } from "../../../constants/Demo";

export default function DecorWindow() {
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
      {officeData[1]?.items[3]?.subproduct.map((item, index) => (
          <div key={index} className="my-2">
            <div>
              <SubTitle title={item.header !== "" ? item.header : header} className={`mx-1 my-2`} />

                <div >
                  <Image img={item.items[0].imgurl} className="object-fill w-full h-40 lg:h-[500px]" />
                  
                </div>
              

            


            </div>
          </div>
        ))}
      </div>

    </div>
  );
}