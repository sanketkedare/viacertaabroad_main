import React from "react";

const IndiviualHero = ({ country }) => {
  const BANNER = "/destinations/usa.png";
  return (
    <div className="relative h-[550px] bg-black text-[#DCEBFF]">
      {/* Background Image */}
      <div className="absolute w-full h-full inset-0 opacity-25 left-0">
        <img
          src={country.banner ? country.banner : BANNER}
          className="w-full h-full object-cover"
          alt="USA Destination"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex mx-auto lg:w-auto w-9/12 h-full justify-center items-center z-10 px-4 sm:px-8">
        <div className="flex flex-col text-center lg:justify-center items-center gap-5 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold mt-10">
            {country.page.banner_text}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
          {country.page.description}
          </p>
          <button className="bg-[#E00012] w-full sm:w-[191px] h-[50px] text-white text-lg md:text-[20px] my-2 rounded-md cursor-pointer">
            Talk to Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndiviualHero;
