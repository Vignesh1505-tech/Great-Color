import React from "react";
import { NavbarData } from "../../constants";
import Button from "../Common/Button";
import { MdHome } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Submenu from "./Submenu";
import { PrintData } from "../../constants/Demo";

const Navbar = () => {
  function handleclick(value) {}

  return (
    <div className="">
      <div className="flex justify-between bg-[#F3F3F3] mx- py-4 px-8">
        {NavbarData.map((item) => {
          return (
            <div className="flex items-center ">
              {item.label === "Home" ? <MdHome /> : ""}
              <Button
                onClick={() => handleclick(item.label)}
                className="text- text-[#3d3c3c]"
                text={item.label}
              />
              {item.label !== "Home" ? <IoMdArrowDropdown /> : ""}
            </div>
          );
        })}
      </div>
      <div>
        <Submenu data={PrintData} tilte={"Print & Marketing"}/>
        
      </div>
    </div>
  );
};

export default Navbar;
