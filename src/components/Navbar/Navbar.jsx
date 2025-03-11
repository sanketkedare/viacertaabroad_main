"use client";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaCog,
  FaHome,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSignInAlt,
  FaTimes,
} from "react-icons/fa";
import SignIn from "../SignIn-Pop-Up/SignIn";
import { useDispatch, useSelector } from "react-redux";
import IconDropdown from "../Profile/IconDropdown";
import { setUser } from "@/Redux/authSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBlog, FaBook, FaServicestack } from "react-icons/fa6";

const Navbar = () => {
  const dispatch = useDispatch();
  const path = usePathname();

  const user = useSelector((state) => state.user.user);
  const [signInOpen, setSignInOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navlinks = [
    { name: "Home", icon: <FaHome /> },
    { name: "Exams", icon: <FaBook /> },
    { name: "Destinations", icon: <FaMapMarkerAlt /> },
    { name: "Services", icon: <FaServicestack /> },
    { name: "Process", icon: <FaCog /> },
    { name: "Blogs", icon: <FaBlog /> },
    { name: "Contact", icon: <FaPhoneAlt /> },
    { name: "About", icon: <FaInfoCircle /> },
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
      <div className="lg:w-9/12 m-auto px-4 sm:px-2">
        <div className="flex items-center justify-between h-[70px] lg:py-3 w-full">
          <Link href="/home">
            <div className="w-[100px]">
              <img
                className="object-contain cursor-pointer"
                src="/viaCerta-logo.png"
                alt="Logo"
              />
            </div>
          </Link>

          <div className="hidden lg:flex justify-between">
            {navlinks.map((i) => (
              <Link
              key={i.name}
                href={`/home/${
                  "home" === i.name.toLowerCase()
                    ? ""
                    : "" + i.name.toLowerCase()
                } `}
              >
                <button
                  className={`${
                    path === "/home" && i.name === "Home"
                      ? "text-[#2c21b6]"
                      : path === "/home/" + i.name.toLowerCase() &&
                        "text-[#2c21b6]"
                  }  hover:bg-[#152347] hover:text-white p-2 mx-1 font-semibold rounded-xl w-[100px]`}
                >
                  {i.name}
                </button>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-8">
            {!user && (
              <button
                onClick={() => setSignInOpen(true)}
                className="text-white bg-[#2c31b6] hover:bg-[#50528c] font-bold p-2 rounded-xl px-4 transition"
              >
                Sign In
              </button>
            )}
            {user && <IconDropdown />}
          </div>

          <div className="lg:hidden block" onClick={mobileMenuToggler}>
            {mobileMenuOpen ? (
              <div className="fixed right-0 top-0 z-40 bg-white rounded-l-2xl w-[250px] p-5 shadow-lg flex flex-col items-start gap-2 font-bold">
                <FaTimes
                  className="text-2xl cursor-pointer mb-5 "
                  onClick={mobileMenuToggler}
                />
                {navlinks.map((i) => (
                  <Link
                    key={i.name}
                    href={`/home/${
                      "home" === i.name.toLowerCase()
                        ? ""
                        : "" + i.name.toLowerCase()
                    } `}
                    className="w-full"
                  >
                    <div
                      className={`${
                        path === "/home" && i.name === "Home"
                          ? "text-[#2c21b6]"
                          : path === "/home/" + i.name.toLowerCase() &&
                            "text-[#2c21b6]"
                      }  hover:bg-[#152347] hover:text-white p-4  font-bold rounded-xl  bg-gray-200  w-full flex justify-normal items-center gap-4`}
                    >
                      {i.icon}
                      {i.name}
                    </div>
                  </Link>
                ))}
                <div className="bg-[#152347] hover:bg-[#657ab6] cursor-pointer text-white p-4  font-bold rounded-xl    w-full flex justify-normal items-center gap-4">
                  <FaSignInAlt />
                  Sign in
                </div>
              </div>
            ) : (
              <FaBars className="fixed top-4 right-4 bg-white p-2 rounded-full text-5xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
