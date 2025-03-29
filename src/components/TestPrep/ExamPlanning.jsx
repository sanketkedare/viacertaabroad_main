import React from "react";
import { CgSandClock } from "react-icons/cg";

const ExamPlanning = ({ examData }) => {
  return (
    <div className="lg:h-[500px] relative  w-full mt-10 flex items-end">
      <div className="absolute h-[350px] w-full top-0 bg-[#1E1E8C] text-white text-center z-0 overflow-hidden" >
        <img className="absolute -top-80 z-0 opacity-20" src="https://www.mim-essay.com/images/blogs/pexels-lilartsy-1925536.jpg "/>
        <div className="relative z-10">
        <h1 className="lg:text-[40px] text-2xl font-bold lg:mt-20 mt-10 lg:w-auto w-11/12 m-auto">
          {examData.headline.title}
        </h1>
        <h1 className="lg:text-[20px] text-sm font-bold ">{examData.headline.info}</h1>
        </div>
       
        <img
          src="/slider/lines-white.png"
          className="absolute top-0 right-0 z-30 "
        />
        <img
          src="/slider/lines-white.png"
          className="absolute text-white bottom-0 left-0 z-30 rotate-180"
        />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:mt-0 mt-52 justify-center w-full gap-3">
        {examData.headline.services.map((i) => (
          <div className="lg:[250px] h-[150px] rounded-2xl lg:w-[300px] shadow-xl gradient-border z-30 bg-white p-4 flex flex-col gap-3 text-xl">
            <CgSandClock className="text-[#E00002] font-bold lg:text-xl" />
            <p className="font-bold">{i.title}</p>
            <p className="text-[16px]">{i.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPlanning;
