"use client";
import React, { useState } from "react";
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import DropDown from "./DropDown";
import SignIn from "../SignIn-Pop-Up/SignIn";

const Navbar = () => {
  const [signInOpen, setSignInOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navlinks = ["Countries", "Exams", "Resources", "More"];
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="w-full bg-white shadow-md text-sm">
      {signInOpen && <SignIn setSignInOpen={setSignInOpen} />}
      <div className="lg:w-9/12 m-auto">
        {/* Desktop Navbar */}
        <div className=" mx-auto lg:w-full w-11/12 flex items-center justify-between py-3">
          {/* Logo */}
          <div className="w-[100px]">
            <img
              className="object-contain cursor-pointer"
              src="/viaCerta-logo.png"
              alt="Logo"
            />
          </div>
          <button
              onClick={() => toggleDropdown("Explore Courses")}
              className="cursor-pointer font-semibold flex items-center gap-2 transition p-2 px-4 bg-[#152347] hover:bg-[#ffffff] hover:text-[#152347] hover:border border-[#152347] text-[#ffffff] rounded-sm"
            >
              Explore Courses <FaChevronDown size={14} />
            </button>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
           

            {navlinks.map((i) => (
              <div key={i}>
                <button
                  onClick={() => toggleDropdown(i)}
                  className="flex items-center gap-2 cursor-pointer font-semibold hover:text-blue-600 transition"
                >
                  {i} <FaChevronDown size={14} />
                </button>
              </div>
            ))}

            {openDropdown && <DropDown openDropdown={openDropdown} />}
          </div>

          {/* Desktop Auth & Contact */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setSignInOpen(true)}
              className="text-[#2c31b6] font-bold hover:text-blue-600 transition"
            >
              Sign In
            </button>
            <p className="flex items-center gap-1 text-[#2c31b6] font-bold">
              <FaPhoneAlt size={12} /> 1800-123-1234
            </p>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden text-[#152347] text-xl z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col bg-white shadow-lg p-4 absolute top-14 left-0 w-full z-50 mt-10">
            <button
              onClick={() => toggleDropdown("Explore Courses")}
              className="p-2 font-semibold flex justify-between items-center border-b"
            >
              Explore Courses <FaChevronDown size={14} />
            </button>

            {navlinks.map((i) => (
              <button
                key={i}
                onClick={() => toggleDropdown(i)}
                className="p-2 font-semibold flex justify-between items-center border-b"
              >
                {i} <FaChevronDown size={14} />
              </button>
            ))}

            <button
              onClick={() => setSignInOpen(true)}
              className="text-[#2c31b6] font-bold p-2"
            >
              Sign In
            </button>
            <p className="text-[#2c31b6] font-bold flex items-center p-2">
              <FaPhoneAlt size={12} className="mr-1" />
              1800-123-1234
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
