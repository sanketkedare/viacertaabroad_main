import React from "react";

const Cart4 = () => {
  return (
    <div className="sticky top-10 w-[1366px] h-[634px] m-auto bg-none my-10 mb-0 ">
      <div className="w-[1200px] relative h-full bg-[#FFF2F3] m-auto shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl">
        <div className="w-2/3 p-10 text-left flex flex-col gap-10 justify-center h-full">
          <h1 className="text-[50px] font-semibold">
            <span className="text-[#E00012]">Earn </span>While You 
            <span className="text-[#E00012]"> Learn </span>, and get your
            Work Visa Next
          </h1>
          <p className="text-[28px] w-3/4">
          From finding a part-time work, Internships, and guiding you toward a post-study work visa– we help you build your career form day one.
          </p>
          <button className="bg-[#E00012] w-[191px] h-[50px] text-white text-[20px] rounded-[4px]">
            Let's chat now
          </button>
        </div>
        <img className="absolute bottom-0 right-0 w-[500px] z-0" src="/image.png"/>
      </div>
    </div>
  );
};

export default Cart4;
