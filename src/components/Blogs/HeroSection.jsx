import React from "react";

const HeroSection = ({ artical }) => {
  const dummyImage =
    "https://www.rugtek.com/wp-content/uploads/2022/03/blogbanner-1.jpg";
  return (
    <div className="relative min-h-[75vh] bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={`${artical.image ? artical.image : dummyImage}`}
          className="w-full h-full object-cover opacity-30"
          alt="Service Banner"
        />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3  w-11/12  h-full z-10 space-y-4 p-4 lg:p-8">
        <div className="col-span-2  text-[#fff] w-full  h-full flex flex-col lg:justify-center justify-start gap-10 lg:gap-14">
          <h1 className=" text-3xl lg:text-5xl font-bold  lg:text-left text-center">
            {artical.title}
          </h1>
          <h3 className="text-sm lg:text-2xl lg:w-4/5 lg:text-left text-center">
            {artical?.intro?.slice(0, 200)}...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
