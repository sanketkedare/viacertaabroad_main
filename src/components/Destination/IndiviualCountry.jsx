import { FiAward } from "react-icons/fi";
import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import IndiviualHero from "./IndiviualHero";
import { IoStar } from "react-icons/io5";

const IndiviualCountry = ({ country }) => {
  const university = {
    name: "Stanford University",
    location: "Stanford , United States",
    courses: " 36 Courses offered",
    rank: " Rank-2",
  };
  return (
    <div className="">
      {/* Hero Section */}
      <IndiviualHero country={country} />

      <div className="w-10/12 text-center m-auto my-10">
        <p className="lg:text-[45px] text-3xl font-bold mt-10">
          Top-Ranked Universities to go for
        </p>
        <p className="lg:text-[20px]  my-2">{country.page.top_universities}</p>

        {/* List of Universities */}
        <div className="lg:flex grid grid-cols-2 lg:gap-0 gap-2  justify-between flex-wrap w-full  my-10">
          {Array.from({ length: 3 }).map((_) => (
            <div className="lg:w-[30%] my-2 lg:h-[450px] lg:shadow-sm shadow-xl rounded-xl hover:shadow-black">
              <div className="lg:h-[200px]">
                <img src="/destinations/stanford.png" />
              </div>
              <div className="flex flex-col items-start text-left gap-2 p-3">
                <p className="text-[#1E1E8C] lg:text-[30px] font-bold">
                  {university.name}
                </p>
                <p className="lg:text-[20px] text-sm">{university.location}</p>
                <p className="flex gap-2 items-center lg:text-xl text-sm">
                  <GiGraduateCap className="lg:text-xl ' text-[#E00012]" />{" "}
                  {university.courses}
                </p>
                <p className="flex gap-2 items-center lg:text-xl text-sm">
                  <FiAward className="lg:text-lg' text-[#E00012]" />
                  {university.rank}
                </p>
              </div>
              <button className=" bg-[#E00012] text-white lg:p-3 lg:px-7 lg:my-0 p-1 px-3 my-2 text-sm rounded-xl cursor-pointer">
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center py-10">
          <button className="border border-[#E00012] text-[#E00012] hover:bg-[#E00012] hover:text-white p-3 px-7 rounded-xl ">
            Explore All Universities
          </button>
        </div>
      </div>

      <div className="w-10/12 lg:h-[70vh]  m-auto my-10 grid lg:grid-cols-2 items-center">
        <div className="flex items-center justify-center m-auto relative">
          {/* Top-left text bubble */}
          <div className="absolute top-0 left-0 border text-wrap text-center flex justify-center items-center flex-wrap border-[#E00004] w-[100px] h-[100px] rounded-full bg-white p-2">
            <p>
              <span className="text-[#E00004] font-bold">
                {country.reason.stats[0].split(" ")[0]}
              </span>{" "}
              {country.reason.stats[0].split(" ").slice(1).join(" ")}
            </p>
          </div>

          {/* Bottom-right text bubble */}
          <div className="absolute bottom-0 right-0 border text-wrap text-center flex justify-center items-center flex-wrap border-[#E00004] w-[100px] h-[100px] rounded-full bg-white p-2">
            <p>
              <span className="text-[#E00004] font-bold">
                {country.reason.stats[1].split(" ")[0]}
              </span>{" "}
              {country.reason.stats[1].split(" ").slice(1).join(" ")}
            </p>
          </div>

          {/* Center image */}
          <div className="rounded-full p-4 overflow-hidden w-[350px] h-[350px] flex items-center border justify-center">
            <img
              src={country.banner}
              className="rounded-full object-cover h-full w-full"
              alt="Country Banner"
            />
          </div>
        </div>

        <div className="">
          <p className="lg:text-[35px] text-2xl font-bold mt-10">
            What Makes{" "}
            <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
              {country.name}
            </span>{" "}
            Your Fit ?
          </p>
          <p className="lg:text-[24px]">{country.page.why_fit}</p>
          <div className="flex flex-col gap-4 py-4">
            {/* Resone here */}
            {country.reason.points.map((point) => (
              <div className="flex gap-2 items-center">
                <div className="rounded-full p-2 shadow-2xl shadow-black bg-white inline-flex text-xl">
                  <IoStar className="text-[#E00004] w-4 h-4" />
                </div>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiviualCountry;
