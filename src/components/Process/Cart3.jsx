import React from "react";

const Cart3 = () => {
  return (
    <div className="sticky top-10 lg:w-[1366px] lg:h-[634px] h-[950px] m-auto lg:mt-10 mt-0 mb-0 flex items-center">
      <div className="absolute w-full h-[420px] z-0"></div>
      <div className="h-[634px] w-10/12 bg-white  m-auto rounded-xl z-10 shadow-[0_0_30px_rgba(0,0,0,0.2)] flex">
        <div className="lg:w-2/3 p-10 text-left flex flex-col gap-10 justify-center">
          <h1 className="lg:text-[50px] text-3xl lg:text-left text-center font-semibold">
            A <span className="text-[#E00012]">Roadmap</span>, made just for you
          </h1>
          <p className="lg:text-[28px] text-xl">
            First, we understand you — your goals, dreams, and confusions. Then,
            we give you clear direction and guidance that fits you best.
          </p>
          <button className="bg-[#E00012] lg:w-[191px] w-full h-[50px] lg:m-0 m-auto text-white text-[20px] rounded-[4px]">
            Let's chat now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart3;
