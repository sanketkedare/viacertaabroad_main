import React from "react";

const HeroMBBS = ({ obj }) => {
  const BANNER = "/destinations/usa.png";
  return (
    <div className="relative h-[550px] bg-black text-[#DCEBFF]">
      {/* Background Image */}
      <div className="absolute w-full h-full inset-0 opacity-25 left-0  top-0 overflow-hidden">
        <img
          src={obj.banner ? obj.banner : BANNER}
          className="w-full h-full"
          alt="USA Destination"
        />
      </div>
      {obj.flag && (
        <div className="absolute z-30 top-4 right-4 lg:w-20 lg:h-10 w-10">
          <img src={obj.flag} className="object-cover" />
        </div>
      )}

      {/* Content Section */}
      <div className="relative flex mx-auto lg:w-auto w-9/12 h-full justify-center items-center z-10 px-4 sm:px-8">
        <div className="flex flex-col text-center lg:justify-center items-center gap-5 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold mt-10">
            {obj.page.banner_text}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            {obj.page.description}
          </p>
          <button className="bg-[#E00012] p-3 px-5 text-white text-lg md:text-[20px] my-2 rounded-md cursor-pointer">
            {obj.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMBBS;
