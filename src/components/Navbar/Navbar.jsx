"use client";
import React, { useState } from "react";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import DropDown from "./DropDown";

const  Navbar = () => {
  const navlinks = ["Countries", "Exams", "Resources", "More"];
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="w-screen bg-white shadow-md text-sm ">
      <div className="w-9/12 mx-auto flex items-center justify-between">
        {/* Company Logo */}
        <div className="w-[100px]">
          <img
            className="object-contain cursor-pointer"
            src="/viaCerta-logo.png"
            alt="Logo"
          />
        </div>

        {/* Navigation Links with Equal Spacing */}
        <div className="flex items-center gap-12">
          <button
            onClick={() => toggleDropdown("Explore Courses")}
            className="cursor-pointer font-semibold flex items-center gap-2 transition p-2 px-4 bg-[#152347] hover:bg-[#ffffff] hover:text-[#152347] hover:border border-[#152347] text-[#ffffff] rounded-sm"
          >
            Explore Courses <FaChevronDown size={14} />
          </button>
          {/*Navlinks*/}
          {navlinks.map((i) => (
            <div  key={i}>
              <button
               
                onClick={() => toggleDropdown(i)}
                className="flex items-center gap-2 cursor-pointer font-semibold hover:text-blue-600 transition"
              >
                {i} <FaChevronDown size={14} />
              </button>
            </div>
          ))}

          {/* Common Dropdown */}
          {openDropdown && <DropDown openDropdown={openDropdown} />}
        </div>

        {/* Auth & Contact */}
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 text-[#2c31b6] font-bold  hover:text-blue-600 transition">
            Sign In
          </button>
          <p className="flex items-center gap-1 text-[#2c31b6] font-bold">
            <FaPhoneAlt size={12} />
            1800-***-****
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
