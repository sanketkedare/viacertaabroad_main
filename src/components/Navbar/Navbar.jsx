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

import SignInButton from "./SignInButton";

const Navbar = () => {
  // const userFromBE = useAuth();
  // console.log(userFromBE)
  const dispatch = useDispatch();
  const path = usePathname();
  const [signInOpen, setSignInOpen] = useState(false);

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

  return (
    <nav className="w-full  lg:h-[70px] transition-all duration-500 bg-white text-black shadow-md">
      <div className="relative">
        <SignIn signInOpen={signInOpen} setSignInOpen={setSignInOpen} />
        <div className="lg:w-11/12  m-auto  sm:px-2">
          <div className="flex items-center  lg:justify-between justify-center  w-full h-full">
            <CompanyLogo />
            <div className="hidden lg:flex justify-between items-center h-full w-3/4">
              <OptionsDesktop />
              <SignInButton/>
            </div>
            <OptionsMobile setSignInOpen={setSignInOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
