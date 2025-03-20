import React from "react";
import Cart1 from "./Cart1";
import Cart2 from "./Cart2";
import Cart3 from "./Cart3";
import Cart4 from "./Cart4";

const ScrollableCards = () => {
  return (
    <div className="p-5 py-10 h-screen overflow-y-auto no-scrollbar">
      {/* Scrollable container */}
      <div className="h-[400vh] w-full relative flex flex-col justify-normal mt-0">
        <Cart1 />
        <Cart2 /> 
        <Cart3/>
        <Cart4/>
      </div>
    </div>
  );
};

export default ScrollableCards;
