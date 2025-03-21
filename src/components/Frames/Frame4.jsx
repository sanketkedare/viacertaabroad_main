import React from "react";
import ApplicationForm from "../HeroSection/ApplicationForm";

const Frame4 = () => {
  return (
    <div className="lg:w-[90%] lg:h-[427px] h-[750px] bg-[#14247C] rounded-[12px] m-auto relative flex flex-col lg:grid lg:grid-cols-3 overflow-hidden">
      {/* Background Outlined Text */}
      <div className="absolute text-[250px] w-full h-full bottom-0 flex lg:items-end items-center  opacity-10">
        <span className="outlined-text">VIACERTA</span>
      </div>


      <div className="col-span-2 text-[#fff] flex flex-col justify-normal h-full  p-10  gap-5">
        <h1 className="lg:text-[48px] text-3xl lg:text-left text-center">
          Hey You, Your Future Is Calling–Let’s Get You Abroad
        </h1>
        <h3 className="lg:text-[24px] lg:w-2/3 lg:text-left text-center">
          Answer the Call, your future shouldn’t be on hold.
        </h3>
      </div>
      <ApplicationForm />
    </div>
  );
};

export default Frame4;
