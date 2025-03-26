"use client";

import React, { useState } from "react";
import { destinations } from "../Navbar/dropdowns";
import StudyAbroadHero from "./StudyAbroadHero";

const StudyAbroad = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");
  return (
    <div className="min-h-screen">
      <StudyAbroadHero />

      {/* Country Selection */}
      <div className="lg:w-9/12 w-11/12 m-auto">
        {/* Heading */}
        <h1 className="lg:text-[30px] text-xl font-bold mt-10">
          Discover Your Dream{" "}
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            Universities
          </span>{" "}
          Abroad!
        </h1>

        {/* Country Selection */}
        <div className="w-full overflow-x-scroll scrollbar-hide">
          <div className="flex gap-4 p-2 py-4 w-full mt-4">
            <div
              onClick={() => setSelectedCountry("All")}
              className={`border border-gray-400 text-sm lg:min-w-[100px] flex-shrink-0 p-2 px-4  rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all ${
                selectedCountry === "All"
                  ? "border-[#14247C] font-bold bg-gray-100"
                  : ""
              }`}
            >
              All
            </div>
            {destinations.map((i) => (
              <div
                key={i.name}
                onClick={() => setSelectedCountry(i.name)}
                className={`border border-gray-400 text-sm lg:min-w-[100px] flex-shrink-0 p-2 px-4 rounded-xl flex items-center gap-2 cursor-pointer hover:border-[#E00012] shadow-sm transition-all ${
                  selectedCountry === i.name
                    ? "border-[#14247C] font-bold bg-gray-100"
                    : ""
                }`}
              >
                <img
                  src={i.flag}
                  alt={`${i.name} flag`}
                  className="w-10 border"
                />
                {i.name}
              </div>
            ))}
          </div>
        </div>

        {/* List Of Universities */}
        <div className="min-h-[50vh] my-5 border">
          Selected Country : {selectedCountry}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
