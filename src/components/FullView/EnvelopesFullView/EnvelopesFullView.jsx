import React, { useState } from "react";
import Head from "../../Common/Head";
import ImageCarousel from "../../ImageCarousel";
import About from "../About";
import envelopes1 from "../../../assets/Fullview_image/envelopes1.webp";
import envelopes2 from "../../../assets/Fullview_image/envelopes2.webp";
import Head2text from "../../Common/Head2text";
import Pricelist from "../Pricelist";

const EnvelopesFullView = () => {
  const image = [["Envelopes"], [envelopes1, envelopes2]];
  const [swipe, setSwipe] = useState(false);

  return (
    <div className="mt-[5%]">
      <div className="mx-[8%]">
        <div className="flex gap-5 w-[100%]">
          <div className="w-[50%]">
            <div>
              <Head
                text={image[0]}
                className="text-xl my-2 inline-block font-semibold text-[#212529] "
              />
              <p className="border-b-[4px] border-[#D93800] mb-3 w-[10%]"></p>
            </div>
            <div>
              <ImageCarousel data={image} showThumbs={true} />
            </div>
          </div>

          <div className="w-[50%] h-[90%] text-sm text-left mt-[3%] border-collapse border-[1px] border-[#c3c1c1]">
            <div className="flex  w-full    border-2 text-black font-bold border-[#c3c1c1]  bg-white border-l-0  border-r-0  text-left">
              <div
                className="w-[50%] relative cursor-pointer"
                onClick={() => setSwipe(false)}
              >
                <Head2text
                  text="Price"
                  className="border- flex justify-center font-medium py-3 border-[#c3c1c1] border-r-2"
                />
                {!swipe && (
                  <p className="border-2 absolute bottom-0 left-0  w-full border-[#D93800]"></p>
                )}
              </div>
              <div
                className="w-[50%] relative cursor-pointer"
                onClick={() => setSwipe(true)}
              >
                <Head2text
                  text="About"
                  className="border-  py-3 flex justify-center font-medium"
                />
                {swipe && (
                  <p className="border-2 absolute bottom-0 left-0  w-full border-[#D93800]"></p>
                )}
              </div>
            </div>
            <div className="m-2">
              {swipe ? (
                <div>
                  <About head={false} />
                </div>
              ) : (
                <div>
                  <Pricelist/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopesFullView;
