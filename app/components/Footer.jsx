import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto p-4 space-y-5 bg-[#003A8E] text-white">
      <ul className="flex gap-5 justify-center items-start p-8">
        <li className="p-1 font-medium text-base md:text-xl">Home</li>
        <li className="p-1 font-medium text-base md:text-xl">About</li>
        <li className="p-1 font-medium text-base md:text-xl">Training</li>
        <li className="p-1 font-medium text-base md:text-xl">Services</li>
      </ul>
      <p className="text-center">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
