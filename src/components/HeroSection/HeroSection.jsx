"use client";

import React from "react";
import ApplicationForm from "./ApplicationForm";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  let VIDEO_URL = "";

  return (
    <section className="relative w-full shadow-sm lg:h-[70vh] overflow-hidden bg-black px-4 p-2">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="w-full h-full absolute inset-0"
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
      <div className="relative z-10 lg:grid lg:grid-cols-3 h-full lg:w-9/12 m-auto">
        {/* Hero Text */}
        <div className="flex flex-col lg:gap-10 gap-4 justify-center lg:items-start items-center h-full col-span-2 text-white">
          <div className="lg:text-left text-center">
            <p className="lg:text-4xl text-lg font-bold py-2">
              Study Abroad with ViaCerta Abroad
            </p>
            <p className="lg:text-2xl font-bold lg:py-2">Building Careers Globally</p>
          </div>

          <div className="hidden lg:flex gap-5 items-center">
            <div>
              <p className="text-3xl text-[#f8b62d] font-semibold">80+</p>
              <p className="text-xl">University Partners</p>
            </div>
            <p className="rotate-90">//////</p>
            <div>
              <p className="text-3xl text-[#f8b62d] font-semibold">10K+</p>
              <p className="text-xl">Careers Transformed</p>
            </div>
          </div>

          {/* Desktop Explore Button */}
          <div>
            <Link href="/explore">
              <span className="cursor-pointer p-2 font-semibold text-xl hidden lg:flex items-center gap-2 transition px-6 bg-[#152347] hover:bg-[#3b445c] text-[#ffffff] rounded-sm">
                Explore Courses <IoIosArrowForward />
              </span>
            </Link>
          </div>
        </div>

        {/* Placeholder for Counselling Form */}
        <ApplicationForm />

        {/* Mobile Explore Button */}
        <div className="lg:hidden flex flex-col items-center gap-3 mt-4 text-white my-10">
          <div className="flex gap-5 items-center my-5">
            <div className="text-center">
              <p className="text-2xl text-[#f8b62d] font-semibold">80+</p>
              <p className="text-sm">University Partners</p>
            </div>
            <p className="rotate-90">//////</p>
            <div className="text-center">
              <p className="text-2xl text-[#f8b62d] font-semibold">10K+</p>
              <p className="text-sm">Careers Transformed</p>
            </div>
          </div>

          {/* Mobile Explore Button with useRouter() Fallback */}
          <button
            onClick={() => router.push("/explore")}
            className="cursor-pointer my-5 p-2 font-semibold text-lg flex items-center gap-2 transition px-6 bg-[#152347] hover:bg-[#3b445c] text-[#ffffff] rounded-sm"
          >
            Explore Courses <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
