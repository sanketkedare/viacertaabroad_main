"use client";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import ApplicationForm from "./ApplicationForm";

const HeroSection = () => {
  let VIDEO_URL = ""
    // "https://www.youtube.com/embed/B_UbDtoR16I?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&showinfo=0&rel=0&playlist=B_UbDtoR16I";
  return (
    <section className="relative shadow-sm h-[70vh] overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="w-full h-full  absolute inset-0"
          src={VIDEO_URL}
          title="Background Video"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen

        ></iframe>
      </div>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content Overlay */}
      <div className="relative z-10 grid grid-cols-3 h-full w-9/12 m-auto">
        {/* Hero Text */}
        <div className="flex flex-col gap-10 justify-center h-full col-span-2 text-white">
          <div>
            <p className="text-4xl font-bold py-2">
              Study Abroad with ViaCerta Abroad
            </p>
            <p className="text-2xl font-bold py-2">Building Careers Globally</p>
          </div>

          <div className="flex gap-5 items-center">
            <div>
              <p className="text-3xl text-[#f8b62d]  font-semibold">80+</p>
              <p className="text-xl">University Partners</p>
            </div>
            <p className="rotate-90">//////</p>
            <div>
              <p className="text-3xl text-[#f8b62d]  font-semibold">10K+</p>
              <p className="text-xl">Careers Transformed</p>
            </div>
          </div>
          <div>
          <button className="cursor-pointer p-2 font-semibold text-2xl flex items-center gap-2 transition px-6 bg-[#152347] hover:bg-[#3b445c]   text-[#ffffff] rounded-sm">
            Explore Courses <FaGreaterThan/>
          </button>
          </div>
         
        </div>

        {/* Placeholder for Counselling Form */}
        <ApplicationForm/>
       
      </div>
    </section>
  );
};

export default HeroSection;
