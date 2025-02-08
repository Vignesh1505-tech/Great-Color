import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ImageCarouse = ({data,showThumbs}) => {
 

  return (
    <div className={`relative `}>
      <Carousel 
       showArrows={true}        
       showStatus={false}       
       showThumbs={showThumbs}      
       infiniteLoop={!showThumbs}    
       autoPlay={true}        
       interval={3000}         
       transitionTime={500} 
       
       >
        {data[1]?.map((item, index) => (
          <div key={index} className="relative">
            <img 
              src={item.image||item} 
              alt={`Slide ${index + 1}`} 
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarouse;
