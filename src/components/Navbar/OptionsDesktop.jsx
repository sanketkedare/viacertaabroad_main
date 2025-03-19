import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaBlog, FaBook, FaServicestack } from "react-icons/fa6";
import { motion } from "framer-motion";

const OptionsDesktop = ({ scrolled }) => {
  const path = usePathname();
  const navlinks = [
    { name: "Home", icon: <FaHome /> },
    { name: "Exams", icon: <FaBook /> },
    { name: "Destinations", icon: <FaMapMarkerAlt /> },
    { name: "Services", icon: <FaServicestack /> },
    { name: "Blogs", icon: <FaBlog /> },
    { name: "Contact", icon: <FaPhoneAlt /> },
    { name: "About", icon: <FaInfoCircle /> },
  ];
  return (
    <div className="hidden lg:flex gap-4 justify-between">
      {navlinks.map((i) => (
        <Link key={i.name} href={`/${i.name.toLowerCase()}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              path === "/home" && i.name === "Home"
                ? scrolled
                  ? "text-[#2c21b6]"
                  : "text-[#f8b62d]"
                : path === "/" + i.name.toLowerCase() && "text-[#2c21b6]"
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
  );
};

export default OptionsDesktop;
