import React from "react";

const StudyAbroadHero = () => {
  const BANNER = "https://res.cloudinary.com/dyp3hukiu/image/upload/v1742918247/viacertaabroad/ljofdovicmnhy0cwufrx.png"
  return (
    <div className="relative min-h-[75vh] bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={BANNER}
          className="lg:w-full h-full object-cover opacity-30"
          alt="Study Abroad Banner"
          loading="lazy"
          title="Study Abroad with Viacerta Abroad"
        />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3  w-11/12  h-full z-10 space-y-4 p-4 lg:p-8">
        <div className="col-span-2  text-[#fff]  h-full flex flex-col lg:justify-center justify-start gap-10 lg:gap-14">
          <h2 className=" text-3xl lg:text-6xl font-bold  lg:text-left text-center">
          Study Abroad– Ready For Your Next Big Adventure?
          </h2>
          <h3 className="text-sm lg:text-xl lg:w-4/5 lg:text-left text-center">
          From university selection to visa approval, we make it easy and stress-free.

          </h3>
          <button className="p-3 px-4 bg-[#E00] w-[250px] cursor-pointer rounded-sm font-bold lg:m-0 m-auto">
          Talk To Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadHero;
