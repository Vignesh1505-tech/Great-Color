import React, { useState } from 'react';
import { fag } from '../../constants';
import Head2text from "../Common/Head2text"
import Bodytext from '../Common/Bodytext';

const Faq = () => {

  const [open, setOpen] = useState([]);

  const handleView = (index) => {
    setOpen((prevOpen) => {
      if (prevOpen.includes(index)) {
        return prevOpen.filter((item) => item !== index);
      } else {
        return [...prevOpen, index];
      }
    });
  };

  return (
    <div className='mt-[2%]'>
      <Head2text text="FAQs" className="text-2xl font-semibold " />
      <p className="border-b-[3px] border-[#D93800] mb-3 w-[3%] mt-1"></p>
      <div>
        {fag.map((item, index) => {
          const isOpen = open.includes(index);

          return (
            <div key={index}>
              <div className="">
                <div
                  className="gap-5 flex items-center bg-[#F3F3F3] p-2 mb-2 cursor-pointer"
                  onClick={() => handleView(index)}
                >
                  <h1 className="msm:mr-3 font-semibold">{item.question}</h1>
                </div>


                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] border-[#F3F3F3] border-b-2 border-r-2 border-l-2 mb-2 px-2 py-2 ' : 'max-h-0'
                    }`}
                >
                  {isOpen && <Bodytext text={item.ans} className="mb-4 mt-2 lg:mr-0 msm:mr-6" />}
                </div>

               


              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
