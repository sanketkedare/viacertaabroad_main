"use client";
import React from "react";
import { FaGlobe, FaGraduationCap } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const ApplicationForm = () => 
{
  return (
    <div className="w-[400px] h-[90%] mt-5 bg-white rounded-xl border-t-8 border-[#f8b62d] shadow-lg p-5 z-30">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaGraduationCap className="text-[#2c31b6]" />
          <span className="text-[#2c31b6]">250+ </span>courses
        </div>
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaGlobe className="text-[#2c31b6]" />
          <span className="text-[#2c31b6]">9 </span>countries
        </div>
      </div>

      {/* Form Title */}
      <h2 className="text-2xl font-bold mb-4">
        International Degree Now in Your Budget
      </h2>

      {/* Form Fields */}
      <form className="space-y-4">
        <div>

          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>

          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>

          <div className="flex border border-gray-300 rounded-md mt-1">
            <span className="flex items-center w-20 px-3 text-sm bg-gray-100 border-r">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#152347] hover:bg-[#31343b] text-white text-lg font-semibold py-3 rounded-md  transition flex justify-center items-center gap-2"
        >
          Book Your Free Counseling <IoIosArrowForward />
        </button>

        {/* Terms and Privacy */}
        <p className="text-[10px] m-auto text-gray-500 text-center mt-2 flex">
          By submitting this form, you agree to the{" "}
          <a href="#" className="text-blue-500 underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default ApplicationForm;
