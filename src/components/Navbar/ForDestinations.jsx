import { destinations } from "./dropdowns";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ForDestinations = ({ setIsOpenDropdown }) => {
  const dropdownRef = useRef(null);
  const createUrl = (country) => country.split(" ").join("-");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpenDropdown]);

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute h-[500px] w-[800px] bg-white top-14 left-4/12 z-40 rounded-xl inset-0  backdrop-blur-3xl bg-opacity-50 p-6 grid grid-cols-4 gap-3"
      onClick={() => setIsOpenDropdown(false)}
    >
      {destinations.map((i) => (
        <Link href={`/destinations/${createUrl(i.name)}`} key={i.name}>
          <div className="border border-gray-400 p-2 px-4 rounded-xl flex items-center gap-2 cursor-pointer shadow-sm">
            <img src={i.flag} className="w-10" />

            {i.name}
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default ForDestinations;
