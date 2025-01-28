import React, { useState } from 'react';
import { IoClose, IoMenu, IoSearch } from "react-icons/io5"; 
import Image from './Common/Image';
import logo from '../assets/Logo/dlxprint.svg';
import InputBox from './Common/InputBox';
import Navbar from './Homepage/Navbar';
import Sidebar from './Common/Sidebar';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Header Container */}
      <div className="flex items-center justify-between mx-4 my-4 lg:mx-8 lg:my-4">
        
        {/* Menu Icon for Mobile/Tablet */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 transition-transform duration-300 ease-in-out rounded-full hover:bg-gray-200"
          >
            {/* Rotate the menu icon when open */}
            {!open ? (
              <IoMenu
                size={24}
                className={`transform ${open ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in-out`}
              />
            ) : (
              <IoClose
                size={24}
                className={`transform ${open ? 'rotate-0' : 'rotate-180'} transition-transform duration-300 ease-in-out`}
              />
            )}
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-1 lg:justify-start">
          <Image className="w-32 lg:w-40" img={logo} alt="Logo" />
        </div>

        {/* Search Bar (visible only on larger screens) */}
        <div className="items-center hidden gap-2 lg:flex">
          <InputBox
            style="bg-red- w-96 px-3 rounded-3xl py-1 border-2 border-gray-300 focus:border-blue-500 outline-none"
            type="text"
            placeholder="Search..."
          />
          <div className="bg-[#D93800] flex items-center py-2 px-2 rounded-full">
            <IoSearch size={20} color="white" />
          </div>
        </div>
      </div>

      {/* Display Sidebar when open */}
      {open && <Sidebar setOpen={setOpen} />}
      {/* Navbar (optional for larger screens) */}
      <div>
        <Navbar />
      </div>
    </div>
  );
}
