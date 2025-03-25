import { Award } from "lucide-react";
import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import IndiviualHero from "./IndiviualHero";

const IndiviualCountry = ({ country }) => {
  return (
    <div className="">
      {/* Hero Section */}
      <IndiviualHero country={country} />

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
        <div className="flex  justify-between flex-wrap w-full  my-10">
          <div className="lg:w-[30%] my-2 h-[450px] shadow-sm hover:shadow-black">
            <div className="h-[200px]">
              <img src="/destinations/stanford.png" />
            </div>
            <div className="flex flex-col items-start gap-2 p-3">
              <p className="text-[#1E1E8C] text-[30px] font-bold">
                Stanford University
              </p>
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
          <div className="lg:w-[30%]  my-2 h-[450px] shadow-sm hover:shadow-black">
            <div className="h-[200px]">
              <img src="/destinations/stanford.png" />
            </div>
            <div className="flex flex-col items-start gap-2 p-3">
              <p className="text-[#1E1E8C]  text-[30px] font-bold">
                Stanford University
              </p>
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

          <div className="lg:w-[30%]  my-2 h-[450px] shadow-sm hover:shadow-black">
            <div className="h-[200px]">
              <img src="/destinations/stanford.png" />
            </div>
            <div className="flex flex-col items-start gap-2 p-3">
              <p className="text-[#1E1E8C]  text-[30px] font-bold">
                Stanford University
              </p>
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

      <div className="w-10/12  m-auto my-10 grid lg:grid-cols-4">
        <div className="col-span-2">
          <p className="lg:text-[35px] text-3xl font-bold mt-10">
            Why Study in{" "}
            <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
              {country.name}
            </span>
            ?
          </p>
          <p className="lg:text-[24px]">
            One dream– your cheat sheet to going global!
          </p>
        </div>
        <div className="col-span-2 flex gap-4 shadow-sm">
          <div className="col-span-2 flex  lg:my-0 my-4 gap-4 shadow-sm">
            <div className="border lg:w-[300px] w-[150px] lg:h-[450px] rounded-xl border-b-4 border-r-4 border-r-[#E00002] border-b-[#E00002]">
              <div className="h-1/2">
                <img
                  src="/destinations/image.png"
                  className="object-contain rounded-t-xl"
                />
                <div className="h-1/2 lg:p-4 p-2 flex flex-col gap-3">
                  <p className="text-[#14247C] lg:text-[24px] md:text-sm font-bold">
                    USA hosts more than a million international students
                  </p>
                  <p className="md:text-sm">
                    One dream.– your cheat sheet to going global!
                  </p>
                </div>
              </div>
            </div>
            <div className="border lg:w-[300px] w-[150px] lg:h-[450px] rounded-xl border-b-4 border-r-4 border-r-[#E00002] border-b-[#E00002]">
              <div className="h-1/2">
                <img
                  src="/destinations/image.png"
                  className="object-contain rounded-t-xl"
                />
                <div className="h-1/2 lg:p-4 p-2 flex flex-col gap-3">
                  <p className="text-[#14247C] lg:text-[24px] md:text-sm font-bold">
                    USA hosts more than a million international students
                  </p>
                  <p className="md:text-sm">
                    One dream.– your cheat sheet to going global!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiviualCountry;
