"use client";
import React, { useEffect, useState } from "react";
import SignIn from "../SignIn-Pop-Up/SignIn";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/authSlice";
import { usePathname } from "next/navigation";
// import useAuth from "@/Hooks/useAuth";
import CompanyLogo from "./CompanyLogo";
import OptionsMobile from "./OptionsMobile";
import OptionsDesktop from "./OptionsDesktop";

const Navbar = () => {
  // const userFromBE = useAuth();
  // console.log(userFromBE)
  const dispatch = useDispatch();
  const path = usePathname();
  const [signInOpen, setSignInOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navClasses = `${
    path === "/home" && "fixed"
  }  w-full z-30 transition-all duration-500 ${
    scrolled && path === "/home"
      ? "bg-white text-black shadow-md"
      : path === "/home"
      ? "text-white top-2"
      : "text-black"
  }`;

  return (
    <nav className={navClasses}>
      <div
        className={`relative w-full  text-sm lg:p-4 z-50 h-[100px] ${
          scrolled && path === "/home" ? "bg-white text-black shadow-md " : ""
        }`}
      >
        <SignIn signInOpen={signInOpen} setSignInOpen={setSignInOpen} />
        <div className="lg:w-10/12 m-auto px-4 sm:px-2">
          <div className="flex items-center justify-between lg:h-[70px] lg:py-3 w-full">
            <CompanyLogo scrolled={scrolled} />
            <OptionsDesktop scrolled={scrolled} />
            <OptionsMobile setSignInOpen={setSignInOpen} scrolled={scrolled} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
