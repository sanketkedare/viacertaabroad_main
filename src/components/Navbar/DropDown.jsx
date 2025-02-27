import React from "react";
import ExploreCourses from "./ExploreCourses";

const DropDown = ({ openDropdown }) => {

  return (
    <div className="absolute top-20 z-50 p-4 left-48 mt-2 w-9/12 m-auto min-h-[60vh] bg-white border rounded shadow-md">
      {openDropdown === "Explore Courses" ? (
        <ExploreCourses />
      ) : (
        openDropdown 
      )}
    </div>
  );
};

export default DropDown;
