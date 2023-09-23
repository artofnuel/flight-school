import Image from "next/image";
import React from "react";
import section1 from "../assets/section1.jpg";
import section2 from "../assets/section2.jpg";

const Services = () => {
  return (
    <main className="w-full h-auto md:h-[750px] flex flex-col">
      <section className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[375px]">
          <Image
            src={section1}
            width={700}
            height={700}
            alt="services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-[375px] bg-[#003A8E] p-4 flex flex-col justify-center items-center gap-4">
          <h2 className="text-lg md:text-4xl text-white font-bold">
            EXPLORE YOUR TRAINING OPTIONS
          </h2>
          <p className="p-4 px-8 text-center text-[#d7d7d7] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            officia veritatis, delectus vel dolore nihil! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit, rerum!
          </p>
          <button className="p-2 px-8 bg-[#ef4136] text-white text-lg font-medium rounded-full">
            See More
          </button>
        </div>
      </section>
      <section className="w-full h-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 bg-[#003A8E] p-4 flex flex-col justify-center items-center gap-4">
          <h2 className="text-lg md:text-4xl text-white font-bold">
            THIS IS FLIGHTSAFETY
          </h2>
          <p className="p-4 px-8 text-center text-[#d7d7d7] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            officia veritatis, delectus vel dolore nihil! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit, rerum!
          </p>
          <button className="p-2 px-8 bg-[#ef4136] text-white text-lg font-medium rounded-full">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2 h-[375px]">
          <Image
            src={section2}
            width={700}
            height={700}
            alt="services"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Services;
