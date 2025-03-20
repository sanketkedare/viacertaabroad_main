import React from "react";

const Cart2 = () => {
  return (
    <div className="sticky top-10 w-[1366px] h-[634px] m-auto bg-none my-10 mb-0 ">
      <div className="w-[1200px] h-full bg-[#FFF2F3] m-auto shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl">
        <div className="w-2/3 p-10 text-left flex flex-col gap-10 justify-center h-full">
          <h1 className="text-[50px] font-semibold">
          Your Call,<span className="text-[#E00012]"> Your Country </span> (List it Down)
          </h1>
          <p className="text-[28px]">
          First, we understand you — your goals, dreams, and confusions. Then, we give you clear direction and guidance that fits you best.
          </p>
          <button className="bg-[#E00012] w-[191px] h-[50px] text-white text-[20px] rounded-[4px]">
            Let's chat now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
