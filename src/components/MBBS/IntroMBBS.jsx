import React from "react";

const IntroMBBS = ({ obj }) => {
  return (
    <div className="py-10">
      <p className="lg:text-[50px] text-2xl font-bold text-center">
        {obj?.heading}
      </p>
      {obj?.content.split("\n").map((i) => (
        <div className="w-10/12 m-auto lg:text-[24px] text-xl text-justify mt-5">
          {i}
        </div>
      ))}
    </div>
  );
};

export default IntroMBBS;
