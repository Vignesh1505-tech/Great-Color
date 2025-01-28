// Sidebar.js
import React, { useEffect, useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import InputBox from './InputBox';
import { NavbarData } from '../../constants';
import Button from './Button';
import logo from '../../assets/Logo/dlxprint.svg';
import Submenu from '../Homepage/Submenu';
import { PrintData } from '../../constants/Demo';
import Image from './Image';

export default function Sidebar({setOpen}) {
  const [nav, setNav] = useState("");

  useEffect(()=>{

    setNav({label: "Print & Marketing ",data:PrintData})
  },[])

  function handleClick(value) {
    setNav(value.label === "Home" ? setOpen(false) : value);
  }


  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-100">
      <div className="flex justify-start p-3">
     
        <button className="text-2xl text-black" onClick={() => setOpen(false)}>
          <IoClose />
        </button>
        <div className="flex justify-center flex-1 lg:justify-start">
          <Image className="w-32 lg:w-40" img={logo} alt="Logo" />
        </div>
      </div>
      <div className="flex items-center w-full gap-2 mx-5 my-3">
          <InputBox
            style=" px-3 w-80 rounded-3xl py-1 border-2 border-gray-300 focus:border-blue-500 outline-none"
            type="text"
            placeholder="Search..."
          />
          <div className="bg-[#D93800] flex items-center py-2 px-2 rounded-full">
            <IoSearch size={20} color="white" />
          </div>
        </div>
        <div className='flex h-full'>
      <div className={`flex items-start flex-col justify-start w-[30%]  h-screen gap-5 text-black bg-gray-100 `}>
        {/* Add your navbar or links here */}
         {NavbarData.map((item) => {
                  return (
                    <div
                      key={item.label}
                      onClick={() => handleClick(item)}
                      className="flex items-center justify-center w-full hover:bg-white hover:text-black"
                    >
                      <Button
                        text={item.label}
                        className={` text-[16px] p-2 w-28 text-center ${nav?.label===item.label?"bg-white":"bg-gray-100"} hover:text-black`}
                      />
                    </div>
                  );
                })}
      </div>
      <div className='z-50 mb-24 overflow-y-scroll '>
{nav &&                  <Submenu data={nav.data} title={nav.label} />
}    
      </div>
      </div>
    </div>
  );
}
