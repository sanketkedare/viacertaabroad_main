import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const DashBoard = () => {
  return (
    <div className="min-h-screen px-4 w-full md:w-4/5 flex flex-col gap-10">

        {/* Profile Notification */}
      <div className="bg-gradient-to-b from-[#152347] to-[#4520b3] text-white flex flex-col gap-3 p-5 rounded-xl">
        <strong className="text-lg">Complete your profile</strong>
        <p>
          Your profile is still pending. Complete now to get recommended
          courses.
        </p>
        <button className="p-2 flex gap-3 items-center justify-center hover:bg-gray-200 px-4 rounded-xl bg-[#fff] text-[#152347] w-[200px] font-bold cursor-pointer">
          Start now
          <FaAngleRight />
        </button>
      </div>

      {/* University Slider */}
      <div className="shadow-xl">
        {/* Heading */}
        <div className="flex justify-between p-4 items-center">
            <strong>View Popular University</strong>
            <button className="flex gap-2 items-center cursor-pointer">View all <FaAngleRight/></button>
        </div>

        {/* Slider */}
        <div>

        </div>
      

      </div>
    </div>
  );
};

export default DashBoard;
