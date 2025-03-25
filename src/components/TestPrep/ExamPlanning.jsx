import React from "react";
import { CgSandClock } from "react-icons/cg";

const ExamPlanning = ({ examData }) => {
  return (
    <div className="h-[500px] relative  w-full mt-10 flex items-end">
      <div className="absolute h-[350px] w-full top-0 bg-[#1E1E8C] text-white text-center z-0">
        <h1 className="text-[40px] font-bold mt-20">
          {examData.headline.title}
        </h1>
        <h1 className="text-[20px] font-bold ">{examData.headline.info}</h1>
        <img
          src="/slider/lines-white.png"
          className="absolute top-0 right-0 z-30 "
        />
        <img
          src="/slider/lines-white.png"
          className="absolute text-white bottom-0 left-0 z-30 rotate-180"
        />
      </div>
      <div className="flex justify-center w-full gap-3">
        {examData.headline.services.map((i) => (
          <div className="min-h-[250px] rounded-2xl w-[300px] shadow-xl gradient-border z-30 bg-white p-4 flex flex-col gap-3 text-xl">
            <CgSandClock className="text-[#E00002] font-bold text-xl" />
            <p className="font-bold">{i.title}</p>
            <p className="text-[16px]">{i.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPlanning;
