import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



export default function Image({ className, img, alt }) {
  console.log(className, img, alt);
  return (
    <div>
      <figure>
        <img
          src={img}
          alt={alt}
          className={`${className}`}
          
        />
      </figure>
    </div>
  )
}
