import React from "react";

const ProgramCart = ({program}) => {
  return (
    <div className="flex flex-col items-stretch w-[350px] h-[200px] mb-4 rounded-xl p-4 shadow-2xl">
      <div className="grid grid-cols-4 h-1/2 gap-2">
        <img alt="logo" src="https://t3.ftcdn.net/jpg/04/91/76/62/360_F_491766294_h4j7LbW2YgfbNHhq7F8GboIc1XyBSEY5.jpg" className="col-span-1 object-contain" />
        <div className="col-span-3">
          <p className="text-[14px]">{program.university}</p>
          <p className="font-bold text-[14px]">{program.program}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 h-1/2 items-center">
        <div>
          <p>Country</p>
          <p className="text-[#2c31b6]">{program.country}</p>
        </div>
        <div>
          <p >Online</p>
          <p className="font-bold">{program.online}</p>
        </div>
        <div>
          <p>On Campus</p>
          <p>{program.onCampus}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramCart;
