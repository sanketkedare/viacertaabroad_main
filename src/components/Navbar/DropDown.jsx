import React, { useEffect, useRef } from "react";
import ExploreCourses from "./ExploreCourses";
import SecondDropDown from "./SecondDropDown";
import { FaTimes } from "react-icons/fa";

const DropDown = ({ openDropdown, setOpenDropdown }) => {
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenDropdown]);

  return (
    <div
      ref={dropdownRef}
      className="absolute lg:top-20 top-0 z-50 p-4 lg:left-48 mt-2 lg:w-9/12 w-full lg:min-h-[50vh] min-h-screen bg-white lg:border rounded shadow-md"
    >      
      {openDropdown === "Explore Courses" ? (
        <ExploreCourses setOpenDropdown={setOpenDropdown} />
      ) : (
        <SecondDropDown openDropdown={openDropdown} />
      )}
    </div>
  );
};

export default DropDown;
