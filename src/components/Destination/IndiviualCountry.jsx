import { Award } from "lucide-react";
import React from "react";
import { GiGraduateCap } from "react-icons/gi";

const IndiviualCountry = ({ country }) => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className=" h-[500px] bg-[#DCEBFF]">
        <div className="lg:flex w-10/12  m-auto h-full">
          <div className="w-1/2 flex flex-col justify-center items-start gap-5">
            <h1 className="lg:text-[45px] text-3xl font-bold mt-10">
              Study in{" "}
              <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
                {country.name}
              </span>
            </h1>
            <p className="text-[20px]">
              One dream – your cheat sheet to going global!
            </p>
            <button className="bg-[#E00012] lg:w-[191px] w-full h-[50px]  text-white text-[20px] rounded-[4px]">
              Talk to Experts
            </button>
          </div>
          <div className="w-1/2 relative">
            <img
              src="/destinations/usa.png"
              className="lg:absolute bottom-0 h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-10/12 text-center m-auto my-10">
        <p className="lg:text-[45px] text-3xl font-bold mt-10">
          Top Universities to study in{" "}
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            {country.name}
          </span>
        </p>
        <p className="text-[20px] my-2">
          One dream – your cheat sheet to going global!
        </p>

        {/* List of Universities */}
        <div className="flex justify-between flex-wrap w-full  my-10">
          <div className="w-[30%] my-2 h-[450px] shadow-sm hover:shadow-black">
            <div className="h-[200px]">
              <img src="/destinations/stanford.png" />
            </div>
            <div className="flex flex-col items-start gap-2 p-3">
              <p className="text-[#1E1E8C] text-[35px]">Stanford University</p>
              <p className="text-[20px]">Stanford , United States</p>
              <p className="flex gap-2 items-center">
                <GiGraduateCap className="text-xl text-[#E00012]" /> 36 Courses
                offered
              </p>
              <p className="flex gap-2 items-center">
                <Award className="text-lg text-[#E00012]" />
                Rank-2
              </p>
            </div>
            <button className=" bg-[#E00012] text-white p-3 px-7 rounded-xl cursor-pointer">
              View Details
            </button>
          </div>
          <div className="w-[30%] my-2 h-[450px] shadow-sm hover:shadow-black">
            <div className="h-[200px]">
              <img src="/destinations/stanford.png" />
            </div>
            <div className="flex flex-col items-start gap-2 p-3">
              <p className="text-[#1E1E8C] text-[35px]">Stanford University</p>
              <p className="text-[20px]">Stanford , United States</p>
              <p className="flex gap-2 items-center">
                <GiGraduateCap className="text-xl text-[#E00012]" /> 36 Courses
                offered
              </p>
              <p className="flex gap-2 items-center">
                <Award className="text-lg text-[#E00012]" />
                Rank-2
              </p>
            </div>
            <button className=" bg-[#E00012] text-white p-3 px-7 rounded-xl cursor-pointer">
              View Details
            </button>
          </div>
          <div className="w-[30%] my-2 h-[450px] shadow-sm hover:shadow-black">
            <div className="h-[200px]">
              <img src="/destinations/stanford.png" />
            </div>
            <div className="flex flex-col items-start gap-2 p-3">
              <p className="text-[#1E1E8C] text-[35px]">Stanford University</p>
              <p className="text-[20px]">Stanford , United States</p>
              <p className="flex gap-2 items-center">
                <GiGraduateCap className="text-xl text-[#E00012]" /> 36 Courses
                offered
              </p>
              <p className="flex gap-2 items-center">
                <Award className="text-lg text-[#E00012]" />
                Rank-2
              </p>
            </div>
            <button className=" bg-[#E00012] text-white p-3 px-7 rounded-xl cursor-pointer">
              View Details
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-10">
          <button className="border border-[#E00012] text-[#E00012] hover:bg-[#E00012] hover:text-white p-3 px-7 rounded-xl ">
            Explore All Universities
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndiviualCountry;
