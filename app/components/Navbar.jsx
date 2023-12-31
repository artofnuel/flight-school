"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <header className="bg-white text-[#003A8E]">
      <nav className="w-full h-auto   p-4 md:p-6 md:px-10 flex justify-between items-center relative">
        <h1 className="text-lg md:text-2xl font-bold text-[#003A8E]">
          AV8<span className="">OPS</span>
        </h1>
        <ul className="hidden md:flex gap-5 font-semibold text-lg">
          <li className="p-2">About</li>
          <li className="p-2">Training</li>
          <li className="p-2">Services</li>
          <li className="p-2 bg-white text-[#ef4136] border-2 border-[#003A8E] rounded-full px-4">
            Contact Us
          </li>
        </ul>
        <div className="md:hidden w-10 h-10" onClick={() => setToggle(!toggle)}>
          {!toggle && <HiOutlineMenuAlt3 className="p-2 w-full h-full" />}
          {toggle && <MdClose className="p-2 w-full h-full" />}
        </div>

        {toggle && (
          <ul className="md:hidden w-1/2 h-[270px] bg-white flex flex-col justify-start items-center p-2 gap-5 font-semibold text-lg absolute right-0 top-[80px] rounded-md">
            <li className="p-2">About</li>
            <li className="p-2">Training</li>
            <li className="p-2">Services</li>
            <li className="p-2 bg-white text-[#ef4136] border-2 border-[#003A8E] rounded-full px-4">
              Contact Us
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
