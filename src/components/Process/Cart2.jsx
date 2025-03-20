import React from "react";

const Cart2 = () => {
  return (
    <div className="sticky top-10  lg:w-[1366px]  lg:h-[634px] h-[700px] m-auto bg-none lg:my-10 mb-0 ">
      <div className="lg:w-[1200px] w-10/12 h-full bg-[#FFF2F3] m-auto shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl">
        <div className="lg:w-2/3 lg:p-10 p-5 text-left flex flex-col gap-10 justify-center h-full">
          <h1 className="lg:text-[50px] text-2xl lg:text-left text-center  font-semibold">
          Your Call,<span className="text-[#E00012]"> Your Country </span> (List it Down)
          </h1>
          <p className="lg:text-[28px] text-lg">
          First, we understand you — your goals, dreams, and confusions. Then, we give you clear direction and guidance that fits you best.
          </p>
          <button className="bg-[#E00012] lg:w-[191px] w-full h-[50px] m-auto lg:m-0 text-white text-[20px] rounded-[4px]">
            Let's chat now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
