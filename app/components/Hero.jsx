import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-auto md:h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="p-8 w-full md:w-1/2 h-[400px] md:h-full flex flex-col justify-center items-start gap-5 bg-[#003A8E] text-white">
        <h1 className="text-2xl md:text-6xl font-bold">
          Welcome to
          <br className="hidden md:block" />
          <span className="text-[#ef4136]">AV9OPS!</span>
        </h1>
        <p className="font-medium text-base text-[#d7d7d7]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          error sit ipsam dignissimos recusandae inventore at quo voluptate
          doloribus perferendis.
        </p>
        <button className="font-medium bg-[#ef4136] text-white p-2 px-8 rounded-full">
          Know More!
        </button>
      </div>
      <div className="w-full h-[400px] md:h-full md:w-1/2 flex justify-center items-center">
        <span className="p-8 bg-[url('./assets/hero_bkg.jpg')] bg-cover bg-right bg-clip-text text-9xl md:text-[240px] text-right md:leading-[200px] font-bold text-transparent">
          Train
          <br /> With
          <br /> Us
        </span>
      </div>
    </div>
  );
};

export default Hero;
