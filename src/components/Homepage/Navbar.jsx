import React, { useState, useRef, useEffect } from "react";
import { NavbarData } from "../../constants";
import Button from "../Common/Button";
import { MdHome } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Submenu from "./Submenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState("");
  const submenuRef = useRef(null);
  const navigation = useNavigate()

  function handleClick(value) {
    setNav(value.label === "Home" ? "" : value);
    if(value.label==="Home"){
      navigation("/")
    }
  }

  // Handle click outside
  useEffect(() => {
    function handleOutsideClick(event) {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setNav("");
      }
    }

    if (nav) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [nav]);

  return (
    <div className="z-50">
      <div className="lg:flex hidden  justify-between bg-[#F3F3F3] px-28">
        {NavbarData.map((item) => {
          return (
            <div
              key={item.label}
              onClick={() => handleClick(item)}
              className="flex items-center px-2 py-4 hover:bg-orange-400 hover:text-white"
            >
              {item.label === "Home" ? <MdHome /> : ""}
              <Button
                text={item.label}
                className="mr-2 text-[16px] hover:text-white"
              />
              {item.label !== "Home" ? <IoMdArrowDropdown /> : ""}
            </div>
          );
        })}
      </div>
      {nav && (
        <div
          ref={submenuRef}
          className="w-[80%] h-[80%] absolute overflow-auto rounded-md left-1/2 transform -translate-x-1/2 shadow-lg shadow-black flex z-50 bg-white"
        >
          <Submenu setNav={setNav} data={nav.data} title={nav.label} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
