"use client";
import React, { useEffect, useState } from "react";
import {
  FaBars,
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
import { motion } from "framer-motion";
import useAuth from "@/Hooks/useAuth";

const Navbar = () => {
  // const userFromBE = useAuth();
  // console.log(userFromBE)
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const path = usePathname();
  const [signInOpen, setSignInOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navlinks = [
    { name: "Home", icon: <FaHome /> },
    { name: "Exams", icon: <FaBook /> },
    { name: "Destinations", icon: <FaMapMarkerAlt /> },
    { name: "Services", icon: <FaServicestack /> },
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
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;
      if (window.scrollY > scrollThreshold && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY <= scrollThreshold && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`${path === "/home" && 'fixed' }  w-full z-30 transition-all duration-500 ${
       (scrolled && path === "/home") ? "bg-white text-black shadow-md" : path === "/home" ? "text-white top-2" : "text-black" 
      }`}
    >
      <div
        className={`relative w-full  text-sm lg:p-4 z-50 h-[100px] ${
          (scrolled && path === "/home") ? "bg-white text-black shadow-md " : ""
        }`}
      >
        {signInOpen && <SignIn setSignInOpen={setSignInOpen} />}
        <div className="lg:w-10/12 m-auto px-4 sm:px-2">
          <div className="flex items-center justify-between lg:h-[70px] lg:py-3 w-full">
            <Link href="/home">
              <div className="lg:w-[120px] w-[100px] p-4 flex ">
                <img
                  className="object-contain cursor-pointer  rounded-full lg:mt-0 mt-0"
                  src={` ${ path === "/home" ? (scrolled) ? '/viaCerta-logo.png' : "/viacertaLogo-white.png" : '/viaCerta-logo.png'}`}
                  alt="Logo"
                />
              </div>
            </Link>

            <div className="hidden lg:flex gap-4 justify-between">
              {navlinks.map((i) => (
                <Link
                  key={i.name}
                  href={`/${i.name.toLowerCase()}`}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${
                      path === "/home" && i.name === "Home"
                        ? scrolled
                          ? "text-[#2c21b6]"
                          : "text-[#f8b62d]"
                        : path === "/" + i.name.toLowerCase() &&
                          "text-[#2c21b6]"
                    } ${
                      scrolled
                        ? "hover:bg-[#152347] hover:text-white"
                        : "hover:bg-white hover:text-[#152347]"
                    } p-2 mx-1 font-semibold rounded-xl w-[120px] cursor-pointer transition-colors`}
                  >
                    {i.name === "Exams" ? "Test Prep" : i.name}
                  </motion.button>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {!user && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSignInOpen(true)}
                  className="text-white bg-[#2c31b6] hover:bg-[#50528c] font-bold p-2 rounded-xl px-4 transition"
                >
                  Sign In
                </motion.button>
              )}
              {user && <IconDropdown />}
            </div>

            <div className="lg:hidden block " onClick={mobileMenuToggler}>
              {mobileMenuOpen ? (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed right-0 top-0 z-40 bg-white text-black rounded-l-2xl w-[250px] p-5 shadow-lg flex flex-col items-start gap-2 font-bold h-full"
                >
                  <FaTimes
                    className="text-2xl cursor-pointer mb-5"
                    onClick={mobileMenuToggler}
                  />
                  {navlinks.map((i) => (
                    <Link
                      key={i.name}
                      href={`/${i.name.toLowerCase()}`}
                      className="w-full"
                      onClick={mobileMenuToggler}
                    >
                      <div
                        className={`${
                          path === "/home" && i.name === "Home"
                            ? "text-[#2c21b6]"
                            : path === "/" + i.name.toLowerCase() &&
                              "text-[#2c21b6]"
                        }  hover:bg-[#152347] hover:text-white p-4 font-bold rounded-xl bg-gray-200 w-full flex justify-normal items-center gap-4 transition-colors`}
                      >
                        {i.icon}
                        {i.name === "Exams" ? "Test Prep" : i.name}
                      </div>
                    </Link>
                  ))}
                  {!user ? (
                    <div
                      className="bg-[#152347] hover:bg-[#657ab6] cursor-pointer text-white p-4 font-bold rounded-xl w-full flex justify-normal items-center gap-4 transition-colors"
                      onClick={() => {
                        setSignInOpen(true);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <FaSignInAlt />
                      Sign in
                    </div>
                  ) : (
                    <div className="w-full pt-4">
                      <IconDropdown />
                    </div>
                  )}
                </motion.div>
              ) : (
                <FaBars
                  className={`fixed top-6 right-4 ${
                    scrolled
                      ? "bg-[#152347] text-white"
                      : "bg-white text-[#152347]"
                  } p-2 rounded-full text-5xl cursor-pointer transition-colors`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
