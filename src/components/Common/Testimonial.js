
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Perfect quality, delivery on time. The team of Deluxe printing is very professional, they really surprised me with less than 24 hours Pop-up delivery, they helped with design layout during night time. Thank a lot for your work, wish you a Merry Christmas and Happy New Year!",
      author: "Elvira Yudina",
      rating: 5,
    },
    {
      text: "Best service! I have done printing on scarfs and the quality is really great. Work was done in few days, and customer service is super quick to answer all my questions. Will work with them again, my personal recommendation 👍",
      author: "Екатерина Плыва",
      rating: 5,
    },
    {
      text: "Deluxe was efficient with my last minute urgent order for a market for flag and table cover. Farhan delivered my order on time at my location! Very impressed with their quick response and product quality. Will be using their services regularly!",
      author: "Meenal Karani",
      rating: 5,
    },
    {
      text: "Deluxe Printing are a flexible printing company who complete tasks quickly. They have always provided top-quality items and have listened to my requests. I would strongly recommend this company and will continue to use them.",
      author: "Hind Alzarouni",
      rating: 5,
    },
    {
        text: "Perfect quality, delivery on time. The team of Deluxe printing is very professional, they really surprised me with less than 24 hours Pop-up delivery, they helped with design layout during night time. Thank a lot for your work, wish you a Merry Christmas and Happy New Year!",
        author: "Elvira Yudina",
        rating: 5,
      },
      {
        text: "Best service! I have done printing on scarfs and the quality is really great. Work was done in few days, and customer service is super quick to answer all my questions. Will work with them again, my personal recommendation 👍",
        author: "Екатерина Плыва",
        rating: 5,
      },
      {
        text: "Deluxe was efficient with my last minute urgent order for a market for flag and table cover. Farhan delivered my order on time at my location! Very impressed with their quick response and product quality. Will be using their services regularly!",
        author: "Meenal Karani",
        rating: 5,
      },
      {
        text: "Deluxe Printing are a flexible printing company who complete tasks quickly. They have always provided top-quality items and have listened to my requests. I would strongly recommend this company and will continue to use them.",
        author: "Hind Alzarouni",
        rating: 5,
      },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
          slidesToScroll:2
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center">Testimonials</h2>
        <p className="mb-12 text-center text-gray-600">
          We have worked with many happy and satisfied clients. Here is what they have to say about us.
        </p>
        <Slider className="lg:mx-24" {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
                           <div key={index} className="p-6 bg-white rounded-lg shadow-lg ">
                            <div className="h-52">
               <p className="mb-4 text-gray-700">{testimonial.text}</p>
               </div>
               <div className="flex flex-row items-center justify-between">
               <div className="mb-4 text-4xl text-orange-500">❝</div>
               <div>
               <div className="text-lg font-bold">{testimonial.author}</div>
               <div className="text-yellow-400">
                 {"★".repeat(testimonial.rating)}
                 {"☆".repeat(5 - testimonial.rating)}
               </div>
               </div>
               </div>
             </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
