import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import styles
import Image from './Image';

const ImgGrid = ({ data }) => {
    console.log(data)
  return (
    <div>
      <Carousel 
        showArrows={true} 
        showStatus={false} 
        thumbWidth={100} 
        showThumbs={true} 
        showIndicators={false}
        renderThumbs={() =>
          data?.map((item, index) => (
            <img 
              key={index} 
              src={item.image || item.imgurl || item} 
              alt={`Thumbnail ${index}`} 
              className="object-cover w-12 h-12"
            />
          ))
        }
      >
        {data?.map((item, index) => (
          <div key={index} className="relative">
            <Image
              img={item.image || item.imgurl || item}
              className="object-fill h-40 w-60 lg:h-[400px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImgGrid;
