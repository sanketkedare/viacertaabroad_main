import React from "react";
import ApplyNow from "./ApplyNow";

const SelectionProcess = () => {
  return (
    <div className="min-h-screen  py-10">
      <div className="lg:w-10/12 w-11/12 m-auto p-10">
        <p className="lg:text-3xl text-2xl text-center font-bold text-[#152347] mb-10">
          📚 Test & Selection Process
        </p>
        <p className="text-center text-sm lg:text-lg">Scholarships are based on the test scores followed up by the interview process and the overall student’s profile.</p>

        <div className="grid lg:grid-cols-3 items-center gap-10 mt-24">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-20 h-20 flex justify-center items-center text-4xl rounded-full bg-[#f8b62d] transition-transform duration-300 hover:scale-110">
              1
            </div>
            <b className="text-2xl font-semibold text-[#152347]">Online Test</b>
            <p className="text-lg text-gray-700 text-center">
              Based on NEET Syllabus
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-20 h-20 flex justify-center items-center text-4xl rounded-full bg-[#f8b62d] transition-transform duration-300 hover:scale-110">
              2
            </div>
            <b className="text-2xl font-semibold text-[#152347]">
              Interview Round
            </b>
            <p className="text-lg text-gray-700 text-center">
              Personal Interaction with Experts
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-20 h-20 flex justify-center items-center text-4xl rounded-full bg-[#f8b62d] transition-transform duration-300 hover:scale-110">
              3
            </div>
            <b className="text-2xl font-semibold text-[#152347]">
              Final Selection
            </b>
            <p className="text-lg text-gray-700 text-center">
              Top 100 Students Awarded Scholarships
            </p>
          </div>
        </div>

        <div className="mt-10 lg:p-10">
          <p className="text-center lg:text-3xl text-xl font-bold">✅ Test Format</p>
          <div className="flex lg:flex-row flex-col gap-4 justify-evenly mt-10">
            <div className="flex gap-5 justify-center items-center  bg-[#152347] p-5 text-white rounded-xl font-bold lg:text-xl">
              <p>Physics : 25 Questions</p>
            </div>
            <div className="flex gap-5 justify-center items-center bg-[#152347] p-5 text-white rounded-xl font-bold lg:text-xl">
              <p className="">Chemistry : 25 Questions</p>
            </div>
            <div className="flex gap-5 justify-center items-center bg-[#152347] p-5 text-white rounded-xl font-bold lg:text-xl">
              <p className="">Biology : 50 Questions</p>
            </div>
          </div>
          <p className="text-center lg:text-2xl font-bold p-10">
            ⏳ Duration: 2 Hours
          </p>
        </div>
        <div className="flex flex-col justify-center items-center lg:text-xl font-bold gap-5">
          <p className="text-center">🚀 Crack the test and secure your scholarship!</p>
          <ApplyNow />
          <p className="text-center">📍 Register Now – Your Future Starts Today!</p>
        </div>
      </div>
    </div>
  );
};

export default SelectionProcess;
