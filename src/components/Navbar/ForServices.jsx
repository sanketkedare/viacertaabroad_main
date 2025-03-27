import React, { useEffect, useRef } from "react";
import { services } from "./dropdowns";
import Link from "next/link";
import { motion } from "framer-motion";

const ForServices = ({ setIsOpenDropdown }) => {
  const dropdownRef = useRef(null);
  const createUrl = (str) => str.split(" ").join("-").toLowerCase();

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
      className="absolute min-h-[250px] w-[900px] bg-white top-14 left-4/12 z-30 rounded-xl inset-0  backdrop-blur-3xl bg-opacity-50 p-6 grid grid-cols-3 gap-3"
      onClick={() => setIsOpenDropdown(false)}
    >
      {services.map((i, index) => (
        <Link href={`/services/${createUrl(i.name)}`}   key={i.name}>
          <div
          
            className="border border-[#E00012] rounded-[14px] p-2 px-4 flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <img src={`/services/image${index + 1}.png`} className="w-10" />

            {i.name}
          </div>
        </Link>
      ))}
      <Link href={"/services"} className="w-full h-full">
        <button className=" bg-[#E00012]  text-[#fff] rounded-[14px] p-2 px-4 flex items-center gap-2 cursor-pointer shadow-sm w-full h-full">
          <img className="w-10" />
          Explore All services
        </button>
      </Link>
    </motion.div>
  );
};

export default ForServices;
