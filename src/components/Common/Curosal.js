import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carousel } from '../../constants/Demo';
import Head from './Head';
import SubTitle from './SubTitle';

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
    <div className="p-3 mx-auto lg:p-6 lg:mx-10">
      <SubTitle className={"mx-2 lg:mx-5"} title={"Workspace Branding"}/>
      <Carousel
        responsive={responsive}
        arrows
        showDots={false}
        infinite={false}
        autoPlay={false}
        containerClass="carousel-container"
<<<<<<< HEAD
        itemClass="p-2"
=======
        itemClass="p-2 "
        
>>>>>>> master
      >
        {carousel.map((item) => (
          <div key={item.id} className="text-center lg:mx-3">
            <img
              src={item.imageUrl}
              alt={item.text}
              className="object-cover w-full h-40 shadow-md lg:h-60"
            />
            <p className="mt-2 text-[15px] lg:text-[18px] font-medium">{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
