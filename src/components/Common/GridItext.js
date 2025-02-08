import React from 'react';
import Button from './Button';
import Image from './Image';
import { Link, useNavigate } from 'react-router-dom';

// Example data for content
const GridItext = ({ sections }) => {
    const navigate = useNavigate()

    const nav =(id)=>{
        navigate(id)
    }
  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex items-center justify-center max-w-6xl gap-8 py-12 mx-auto px-5 lg:px-2 flex-col flex-col-reverse lg:flex-row ${
            index % 2 === 0 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="flex-1">
            <Image
              img={section.img}
              alt={section.alt}
              className="w-full h-[400px] rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl my-2 inline-block font-semibold text-[#212529]">
              {section.title}
            </h2>
            <p className="mt-4 text-gray-700">{section.text}</p>
            {section.title === 'Textile Printing Dubai' && (
              <div className="flex gap-4 mt-6">
                <Link to={"/fabric"}>
                <Button
                  className={'text-[#eb5929] px-6 py-2 rounded-3xl mt-2 border border-[#eb5929]'}
                  text={'Fabric Range'}
                />
                </Link>
                <Button
                  className={'text-[#eb5929] px-6 py-2 rounded-3xl mt-2 border border-[#eb5929]'}
                  text={'Pattern'}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default GridItext;
