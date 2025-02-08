// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { carousel } from '../../constants/Demo';
// import Head from './Head';
// import SubTitle from './SubTitle';

// const CustomCarousel = () => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 1024, min: 0 },
//       items: 2,
//     },
//   };

  

//   return (
//     <div className="p-3 mx-auto">
//       <SubTitle className={"mx-2 lg:mx-5"} title={"Workspace Branding"}/>
//       <Carousel
//         responsive={responsive}
//         arrows={true}
//         showDots={false}
//         infinite={false}
//         autoPlay={false}
//         containerClass="carousel-container"
//         itemClass="p-2 "
        
//       >
//         {carousel.map((item) => (
//           <div key={item.id} className="text-center lg:mx-3">
//             <img
//               src={item.imageUrl}
//               alt={item.text}
//               className="object-cover w-full h-40 shadow-md lg:h-60"
//             />
//             <p className="mt-2 text-[15px] lg:text-[18px] font-medium">{item.text}</p>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CustomCarousel;
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carousel } from "../../constants/Demo";
import Head from "./Head";
import SubTitle from "./SubTitle";
import { ArrowBackIos, ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 "
      aria-label="Previous"
    >
      <span className="text-black"><ArrowBackIos /></span>
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 "
      aria-label="Next"
    >
      <span className="text-black"><ArrowForwardIos/></span>
    </button>
  );
};

const CustomCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="p-3 mx-auto -z-50">
      <SubTitle className={"mx-2 lg:mx-5"} title={"Workspace Branding"} />
      <Carousel
        responsive={responsive}
        arrows
        showDots={false}
        infinite={false}
        autoPlay={false}
        containerClass="carousel-container"
        itemClass="p-2"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {carousel.map((item) => (
          
          <div key={item.id} className="text-center lg:mx-3">
            {console.log(item)}
            <Link to={`${item.data.header}/${item.text}`} state={{data:item.data.subproduct}}>
            <img
              src={item.imageUrl}
              alt={item.text}
              className="object-cover w-full h-40 shadow-md lg:h-60"
            />
            <p className="mt-2 text-[15px] lg:text-[18px] font-medium">
              {item.text}
            </p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
