import React from "react";
import {
  FaCheckCircle,
  FaLaptop,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaMapSigns,
} from "react-icons/fa";
import ApplyNow from "./ApplyNow";

const WhyApply = () => {
  const answers = [
    {
      icon: <FaGraduationCap className="text-[#2c21b6] mr-3" size={25} />,
      text: "₹80 Lakhs Worth of Scholarships – Reduce your tuition fees and financial stress",
    },
    {
      icon: <FaChalkboardTeacher className="text-[#2c21b6] mr-3" size={25} />,
      text: "Free FMGE Preparation – Get expert coaching to clear FMGE",
    },
    {
      icon: <FaLaptop className="text-[#2c21b6] mr-3" size={25} />,
      text: "Brand-New Laptops – Power up your medical studies with the latest tech",
    },
    {
      icon: <FaCheckCircle className="text-[#2c21b6] mr-3" size={25} />,
      text: "Expert Mentorship – Guidance from top doctors and educators",
    },
    {
      icon: <FaMapSigns className="text-[#2c21b6] mr-3" size={25} />,
      text: "Exclusive Career Roadmap – Step-by-step guidance to help you get into your dream medical college",
    },
  ];

  return (
    <div className="min-h-screen py-10 bg-gradient-to-t from-gray-400 via-white ">
      <div className="w-11/12 sm:w-9/12 m-auto mt-10">
        <p className="text-3xl text-center font-semibold text-[#152347] flex items-center justify-center mb-8">
          🔥 Why You Should Apply?
        </p>
        <div className="flex flex-col items-center  bg-white gap-6 p-6 rounded-2xl shadow-lg justify-center ">
          {answers.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-lg my-5 font-semibold text-gray-700"
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 py-10 font-bold text-xl">
        <p>🚀 Your journey to a top medical career starts here!</p>
        <ApplyNow />
        <p>📍 Register Now – Limited Slots Available!</p>
      </div>
    </div>
  );
};

export default WhyApply;
