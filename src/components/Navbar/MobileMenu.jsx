import React from "react";
import { motion } from "framer-motion";
import IconDropdown from "../Profile/IconDropdown";
import {
  FaHandsHelping,
  FaHome,
  FaSignInAlt,
  FaTimes,
  FaUniversity,
  FaUserMd,
} from "react-icons/fa";
import { FaBook, FaBriefcase, FaGlobe } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";

const MobileMenu = ({
  mobileMenuToggler,
  setSignInOpen,
  setMobileMenuOpen,
}) => {
  const user = useSelector((state) => state.user.user);

  const path = usePathname();

  const navlinks = [
    { name: "Home", icon: <FaHome />, link: "" },
    { name: "Test Prep", icon: <FaBook />, link: "" },
    { name: "Destinations", icon: <FaGlobe />, link: "" },
    { name: "Services", icon: <FaHandsHelping />, link: "services" },
    { name: "Study-Abroad", icon: <FaUniversity />, link: "services" },
    { name: "Work", icon: <FaBriefcase />, link: "" },
    { name: "MBBS Program", icon: <FaUserMd />, link: "" },
  ];

  return (
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
          href={`/${i.link}`}
          key={i.name}
          className={`${
            path === "/home" && i.name === "Home"
              ? "text-[#2c21b6]"
              : path === "/" + i.name.toLowerCase() && "text-[#2c21b6]"
          }  hover:bg-[#152347] hover:text-white p-4 font-bold rounded-xl bg-gray-200 w-full flex justify-normal items-center gap-4 transition-colors`}
        >
          {i.icon}
          {i.name}
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
  );
};

export default MobileMenu;
