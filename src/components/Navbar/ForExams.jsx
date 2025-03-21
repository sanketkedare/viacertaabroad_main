import React from "react";
import { textPrep } from "./dropdowns";

const ForExams = ({setIsOpenDropdown}) => {
  return (
    <div
    className="absolute min-h-[200px] w-[500px] bg-white top-14 left-4/12 z-30 rounded-xl inset-0  backdrop-blur-3xl bg-opacity-50 p-6 grid grid-cols-3 flex-wrap"
    onClick={() => setIsOpenDropdown(false)}
  >
      {textPrep.map((i) => (
        <div
          key={i.name}
          className="w-11/12 m-auto mb-5 h-[70px] border border-gray-400 p-4 rounded-xl flex items-center justify-center cursor-pointer shadow-sm"
        >
          <img src={i.image} className="object-contain w-full" />
        </div>
      ))}
    </div>
  );
};

export default ForExams;
