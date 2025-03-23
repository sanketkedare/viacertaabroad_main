import React from "react";

const Cart3 = () => {
  return (
    <div className="sticky top-10 lg:w-[1366px] lg:h-[634px] h-[950px] m-auto lg:mt-10 mt-0 mb-0 flex items-center">
      <div className="absolute w-full h-[420px] z-0"></div>
      <div className="relative h-[634px] w-10/12 bg-[#F6F7FA]  m-auto rounded-xl z-10 shadow-[0_0_30px_rgba(0,0,0,0.2)] flex">
        <div className="lg:w-2/3 p-10 text-left flex flex-col gap-10 justify-center">
          <h1 className="lg:text-[50px] text-3xl lg:text-left text-center font-semibold">
            A <span className="text-[#E00012]">Roadmap</span>, made just for you
          </h1>
          <p className="lg:text-[28px] text-xl">
          Get a customized plan, flawless applications, SOP guidance, visa help, and accommodation setup– all under one roof.


          </p>
          <button className="bg-[#E00012] lg:w-[191px] w-full h-[50px] lg:m-0 m-auto text-white text-[20px] rounded-[4px]">
            Let's chat now
          </button>

        </div>
        <img src="/slider/lines.png" className="absolute top-0 right-0 rotate-180" />
        <img src="/slider/lines.png" className="absolute top-0 right-0 rotate-180" />
        <img className="absolute bottom-0 right-0 w-[500px] z-0" src="/slider/Ellipse1.png"/>


      </div>
    </div>
  );
};

export default Cart3;
