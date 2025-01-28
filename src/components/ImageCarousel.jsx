import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomDot = ({ index, onClick, active }) => {
  return (
    <div
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      style={{
        width: '8px',
        height: '8px',
        margin: '20px 6px',
        borderRadius: '50%',
        backgroundColor: active ? 'white' : 'black',
        opacity: active ? 1 : 0.5,  // Active dot is fully visible, inactive is semi-transparent
        cursor: 'pointer',
        transition: 'background-color 0.3s, opacity 0.3s',  // Smooth transition
      }}
    />
  );
};

const ImageCarousel = ({ data, showThumbs }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="px-5 my-6 lg:px-7">
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        containerClass="carousel-container"
        customDot={<CustomDot />}
      >
        {data.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.image || item}
              alt={`Slide ${item.id}`}
              className="object-cover w-full rounded-lg h-44 lg:h-auto"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
