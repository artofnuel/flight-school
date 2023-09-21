import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-auto md:h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="p-8 w-full md:w-1/2 h-[400px] md:h-full flex flex-col justify-center items-start gap-5 bg-[#B2EBF2] text-white">
        <h1 className="text-2xl md:text-6xl font-bold text-[#000000DE]">
          Welcome to
          <br className="hidden md:block" /> Flight School!
        </h1>
        <p className="font-medium text-base text-[#0000008A]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          error sit ipsam dignissimos recusandae inventore at quo voluptate
          doloribus perferendis.
        </p>
        <button className="font-medium bg-[#00BCD4] text-white p-2 px-8 rounded-full mx-auto md:mx-0">
          Know More!
        </button>
      </div>
      <div className="w-full h-[400px] md:h-full md:w-1/2 flex justify-center items-center">
        <span className="p-8 bg-[url('./assets/hero_bkg.jpg')] bg-cover bg-right bg-clip-text text-9xl md:text-[250px] text-right md:leading-[190px] font-bold text-transparent">
          Train
          <br /> With
          <br /> Us
        </span>
      </div>
    </div>
  );
};

export default Hero;
