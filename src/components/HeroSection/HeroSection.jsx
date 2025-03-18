"use client";

import React from "react";
import ApplicationForm from "./ApplicationForm";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedCountries from "../Slider/AnimatedCountries";

const HeroSection = () => {
  const router = useRouter();
  const image =
    "https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <section className="relative w-full shadow-sm h-[85vh] overflow-hidden ">
      <motion.img
        alt="banner"
        src={image}
        className="z-0 absolute opacity-80"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay for Readability */}
      <div className="absolute inset-2.5 top-0 left-0 bg-black w-full h-full opacity-50 z-0"></div>

      {/* Content Overlay */}
      <div className="relative z-10 lg:grid lg:grid-cols-3 h-full px-4 p-2 lg:w-9/12 m-auto pt-10">
        {/* Hero Text */}
        <div className="flex flex-col lg:gap-10 gap-4 justify-center lg:items-start items-center h-full col-span-2 text-white">
          <div className="lg:text-left text-center">
            <motion.p
              className="lg:text-4xl text-lg font-bold py-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Study Abroad with ViaCerta Abroad
            </motion.p>
            <motion.p
              className="lg:text-2xl font-bold lg:py-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building Careers Globally
            </motion.p>
          </div>

          <motion.div
            className="hidden lg:flex gap-5 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <p className="text-3xl text-[#f8b62d] font-semibold">80+</p>
              <p className="text-xl">University Partners</p>
            </div>
            <p className="rotate-90">//////</p>
            <div>
              <p className="text-3xl text-[#f8b62d] font-semibold">10K+</p>
              <p className="text-xl">Careers Transformed</p>
            </div>
          </motion.div>

          {/* Desktop Explore Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/explore">
              <span className="cursor-pointer p-2 font-semibold text-xl hidden lg:flex items-center gap-2 transition px-6 bg-[#152347] hover:bg-[#3b445c] text-[#ffffff] rounded-sm">
                Explore Courses <IoIosArrowForward />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Placeholder for Counselling Form */}
        <ApplicationForm />

        {/* Mobile Explore Button */}
        <div className="lg:hidden flex flex-col items-center gap-3 mt-4 text-white my-10">
          <motion.div
            className="flex gap-5 items-center my-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <p className="text-2xl text-[#f8b62d] font-semibold">80+</p>
              <p className="text-sm">University Partners</p>
            </div>
            <p className="rotate-90">//////</p>
            <div className="text-center">
              <p className="text-2xl text-[#f8b62d] font-semibold">10K+</p>
              <p className="text-sm">Careers Transformed</p>
            </div>
          </motion.div>

          {/* Mobile Explore Button with useRouter() Fallback */}
          <motion.button
            onClick={() => router.push("/explore")}
            className="cursor-pointer my-5 p-2 font-semibold text-lg flex items-center gap-2 transition px-6 bg-[#152347] hover:bg-[#3b445c] text-[#ffffff] rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore Courses <IoIosArrowForward />
          </motion.button>
        </div>
      </div>
      <AnimatedCountries/>

    </section>
  );
};

export default HeroSection;
