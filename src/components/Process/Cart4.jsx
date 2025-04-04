import React from "react";

const Cart4 = () => {
  return (
    <div className="sticky top-10  lg:w-[1366px]  lg:h-[634px] h-[750px] m-auto bg-none lg:my-10 mb-0 ">
      <div className="lg:w-[1200px] w-10/12 relative h-full bg-[#FFF2F3] m-auto shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden">
        <div className="lg:w-2/3 lg:p-10 p-5 text-left flex flex-col gap-10 lg:justify-center h-full">
          <h1 className="lg:text-[50px] text-3xl lg:text-left text-center  font-semibold">
            <span className="text-[#E00012]">Earn </span>While You 
            <span className="text-[#E00012]"> Learn </span>, and get your
            Work Visa Next
          </h1>
          <p className="lg:text-[28px] text-lg lg:w-3/4">
          From finding a part-time work, Internships, and guiding you toward a post-study work visa– we help you build your career form day one.
           </p>
          <button className="bg-[#E00012] cursor-pointer z-20 lg:w-[191px] w-full h-[50px]  text-white text-[20px] rounded-[4px]">
          Explore Now
          </button>
        </div>

        <img loading="lazy" alt="earn & learn" title="earn and learn"  className="absolute bottom-0 right-0 w-[500px] z-0 shadow" src="/slider/image41.png"/>
        <img loading="lazy" alt="earn & learn" title="earn and learn"  className="absolute lg:bottom-2 bottom-[30%] right-2/5 w-[200px] z-0 shadow-sm p-0" src="/slider/image42.png"/>
        <img loading="lazy" alt="earn & learn" title="earn and learn"  className="absolute bottom-[30%] right-0 w-[500px] z-0" src="/slider/Ellipse1.png"/>
        <img loading="lazy" alt="earn & learn" title="earn and learn"  className="absolute bottom-[10%] right-[20%] w-[500px] z-0" src="/slider/Ellipse-red.png"/>
        <img loading="lazy" alt="earn & learn" title="earn and learn"  className="absolute lg:bottom-[50%] bottom-[22%] lg:right-1/12 right-0 w-[200px] z-0 roundedd-xl p-0" src="/slider/image43.png"/>
        <img loading="lazy" alt="earn & learn" title="earn and learn"  src="/slider/lines.png" className="absolute bottom-0 left-0" />
        <img loading="lazy" alt="earn & learn" title="earn and learn"  src="/slider/lines.png" className="absolute top-0 right-0 rotate-180" />

      </div>
    </div>
  );
};

export default Cart4;
