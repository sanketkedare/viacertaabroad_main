import React from "react";

const Cart2 = () => {
  return (
    <div className="sticky top-10  lg:w-[1366px]  lg:h-[634px] h-[700px] m-auto bg-none lg:my-10 mb-0 ">
      <div className="relative lg:w-[1200px] w-10/12 h-full bg-[#FFF2F3] m-auto shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl">
        <div className="lg:w-2/3 lg:p-10 p-5 text-left flex flex-col gap-10 justify-center h-full">
          <h1 className="lg:text-[50px] text-2xl lg:text-left text-center  font-semibold">
          Your Call,<span className="text-[#E00012]"> Your Country </span> (List it Down)
          </h1>
          <p className="lg:text-[28px] text-lg lg:w-2/3">
          You choose where you want to go. We help you explore the best countries, courses, and universities that match your vibe and goals.

          </p>
          <button className="bg-[#E00012] lg:w-[191px] w-full h-[50px] m-auto lg:m-0 text-white text-[20px] rounded-[4px] cursor-pointer">
            Explore Now
          </button>
        </div>
        <img src="/slider/image21.png" className="absolute bottom-0 right-0 w-[600px] shadow-sm rounded-t-xl"/>
        <img src="/slider/image22.png" className="absolute lg:bottom-14 lg:right-[47%] right-1/4 bottom-[50%]"/>
        <img className="absolute bottom-[30%] right-0 w-[500px] z-0" src="/slider/Ellipse1.png"/>

        <img src="/slider/image23.png" className="absolute lg:top-[35%] top-[50%] right-0"/>

        <img src="/slider/lines.png" className="absolute bottom-0 left-0" />
        <img src="/slider/lines.png" className="absolute top-0 right-0 rotate-180" />


      </div>
    </div>
  );
};

export default Cart2;
