import React from "react";
import ScrollableCards from "./ScrollableCards";

const Process = () => {
  return (
    <div className="py-4 text-center text-[#000000] bg-white">
      {/* Heading */}
      <h1 className="text-[50px] font-bold mt-10">
        How We Get You There?{" "}
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
          Here’s How
        </span>
      </h1>
      <h3 className="text-[24px] mt-2">
        One dream – your cheat sheet to going global!
      </h3>
      <ScrollableCards />
    </div>
  );
};

export default Process;
