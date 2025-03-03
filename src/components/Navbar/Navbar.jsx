"use client";
import React, { useState } from "react";
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import DropDown from "./DropDown";
import SignIn from "../SignIn-Pop-Up/SignIn";

const Navbar = () => {
  const [signInOpen, setSignInOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navlinks = ["Countries", "Exams", "Resources", "More"];

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const mobileMenuToggler =() =>{
    setMobileMenuOpen(!mobileMenuOpen)

  }

  return (
    <nav className="relative w-full bg-white shadow-md text-sm lg:p-4 z-50">
      {signInOpen && <SignIn setSignInOpen={setSignInOpen} />}
      <div className="lg:w-9/12 m-auto px-4 sm:px-2">
        {/* Desktop Navbar */}
        <div className="flex items-center lg:justify-between gap-5 h-[70px] lg:py-3 w-full">
          {/* Button for small screens */}
          <button
            onClick={() => toggleDropdown("Explore Courses")}
            className="cursor-pointer text-sm font-semibold flex w-[100px] md:hidden items-center gap-2 transition p-2 lg:px-4 bg-[#152347] hover:bg-[#ffffff] hover:text-[#152347] hover:border border-[#152347] text-[#ffffff] rounded-sm dropdown-button"
          >
            COURSES <FaChevronDown size={14} />
          </button>
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
            className="cursor-pointer font-semibold hidden md:flex items-center gap-2 transition p-2 px-4 bg-[#152347] hover:bg-[#ffffff] hover:text-[#152347] hover:border border-[#152347] text-[#ffffff] rounded-sm dropdown-button"
          >
            Explore Courses <FaChevronDown size={14} />
          </button>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {navlinks.map((i) => (
              <div key={i}>
                <button
                  onClick={() => toggleDropdown(i)}
                  className={`flex ${
                    openDropdown === i ? "text-blue-600" : ""
                  } items-center gap-2 cursor-pointer font-semibold hover:text-blue-600 transition dropdown-button`}
                >
                  {i} <FaChevronDown size={14} />
                </button>
              </div>
            ))}
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
            className="md:hidden absolute right-5 text-[#152347] text-xl z-50"
            onClick={mobileMenuToggler}
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden min-h-screen  flex flex-col bg-white shadow-lg  absolute lg:top-14 -top-10 left-0 w-full z-50 mt-10">
            <button
              className="md:hidden absolute right-5 text-[#152347] text-xl z-50 my-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaTimes />
            </button>
            <div className="w-1/4 text-sx flex flex-col ">
              {navlinks.map((i) => (
                <button
                  key={i}
                  onClick={() => toggleDropdown(i)}
                  className="p-1 py-4 font-semibold flex justify-between flex-wrap items-center border w-full dropdown-button"
                >
                  {i}
                </button>
              ))}
              <button
                onClick={() => setSignInOpen(true)}
                className="p-1 py-4 font-semibold flex justify-between flex-wrap items-center border w-full dropdown-button"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
      {openDropdown && (
        <DropDown
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      )}
    </nav>
  );
};

export default Navbar;
