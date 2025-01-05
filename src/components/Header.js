import React from 'react';
import Image from './Common/Image';
import logo from '../assets/Logo/dlxprint.svg';
import InputBox from './Common/InputBox';
import { IoSearch } from "react-icons/io5"
import Navbar from './Homepage/Navbar';

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between mx-8 my-4 ">
        <div>
          <Image
            className="w-40 "
            img={logo}
            alt="Logo"
          />
        </div>


        <div className='flex items-center gap-2 '>
          <InputBox
            style=" bg-red- w-96 px-3 rounded-3xl py-1 border-2 border-gray-300 focus:border-blue-500 outline-none"
            type='text'
            placeholder="Search..."

          />
          <div className='bg-[#D93800] flex items-center py-2 px-2 rounded-full'>
            <IoSearch size={20} color='white'/>
          </div>



        </div>

      </div>

      <div>
        <Navbar/>
      </div>
    </div>
  );
}
