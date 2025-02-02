import React from "react";
import { LetterBoardTable, Specifications } from "../../../constants";
import TablePrice from "../TablePrice";
import ImageCarousel from "../../ImageCarousel";
import Letterhead1 from "../../../assets/Fullview_image/Letterhead.webp";
import full2 from "../../../assets/Fullview_image/full_2.webp";
import Head from "../../Common/Head";
import About from "../About";
import MovingText from "../MoveText";


const LetterBoardView = () => {
  const image = [["Letterhead"], [Letterhead1]];

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

          <div className="w-[50%]">
            <div>
              <About head={true}/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <div>
            <TablePrice
              data={LetterBoardTable}
              Specifications={Specifications}
              title="Basic Pack - 120gsm Woodfree"
            />
          </div>
          <div>
            <TablePrice
              data={LetterBoardTable}
              Specifications={Specifications}
              title="Basic Pack - 120gsm Woodfree"
            />
          </div>
          <div>
            <TablePrice
              data={LetterBoardTable}
              Specifications={Specifications}
              title="Basic Pack - 120gsm Woodfree"
            />
          </div>
        </div>
        <div>
          <MovingText />
        </div>
      </div>
    </div>
  );
};

export default LetterBoardView;
