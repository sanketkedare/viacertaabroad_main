import React, { useEffect, useRef } from "react";
import ExploreCourses from "./ExploreCourses";
import SecondDropDown from "./SecondDropDown";

const DropDown = ({ openDropdown, setOpenDropdown }) => {
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenDropdown]);

  return (
    <div
      ref={dropdownRef}
      className="absolute top-20 z-50 p-4 left-48 mt-2 w-9/12 m-auto min-h-[60vh] max-h-[80vh] bg-white border rounded shadow-md"
    >
      {openDropdown === "Explore Courses" ? (
        <ExploreCourses />
      ) : (
        <SecondDropDown openDropdown={openDropdown} />
      )}
    </div>
  );
};

export default DropDown;
