"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import DropDown from "./DropDown";
import SignIn from "../SignIn-Pop-Up/SignIn";
import { useDispatch, useSelector } from "react-redux";
import IconDropdown from "../Profile/IconDropdown";
import { setUser } from "@/Redux/authSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const dispatch = useDispatch();
  const path = usePathname();

  const user = useSelector((state) => state.user.user);
  const [signInOpen, setSignInOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navlinks = [
    "Home",
    "Exams",
    "Destinations",
    "Services",
    "Process",
    "Blog",
    "Contact",
    "About",
  ];

  const mobileMenuToggler = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const updateStore = () => {
    const storedUser = localStorage.getItem("viacerta-user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  };

  useEffect(() => {
    updateStore();
  }, []);

  return (
    <nav className="relative w-full bg-white shadow-md text-sm lg:p-4 z-50">
      {signInOpen && <SignIn setSignInOpen={setSignInOpen} />}
      <div className="lg:w-10/12 m-auto px-4 sm:px-2">
        {/* Desktop Navbar */}
        <div className="flex items-center lg:justify-between gap-5 h-[70px] lg:py-3 w-full">
          {/* Logo */}
          <Link href="/home">
            <div className="w-[100px]">
              <img
                className="object-contain cursor-pointer"
                src="/viaCerta-logo.png"
                alt="Logo"
              />
            </div>
          </Link>

          {/* Links */}
          {
            navlinks.map((i) => (<Link href={`/home/${ 'home' === i.toLowerCase() ? "" : '' + i.toLowerCase()} `}><button className="bg-amber-300 p-2 font-bold rounded-xl w-[100px]">{i}</button></Link>))
          }

          {/* Desktop Auth & Contact */}
          <div className="hidden md:flex items-center gap-8">
            {!user && (
              <button
                onClick={() => setSignInOpen(true)}
                className="text-[#2c31b6] font-bold hover:text-blue-600 transition"
              >
                Sign In
              </button>
            )}
            <p className="flex items-center gap-1 text-[#2c31b6] font-bold">
              <FaPhoneAlt size={12} /> 1800-123-1234
            </p>
            {user && <IconDropdown />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
