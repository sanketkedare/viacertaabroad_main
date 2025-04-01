import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { textPrep } from "./dropdowns";
import Link from "next/link";

const ForExams = ({ setIsOpenDropdown }) => {
  const dropdownRef = useRef(null);

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
      // ref={dropdownRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute min-h-[200px] w-[500px] bg-white top-14 left-4/12 z-30 rounded-xl inset-0 backdrop-blur-3xl bg-opacity-50 p-6 grid grid-cols-3 flex-wrap shadow-lg"
    >
      {textPrep.map((i) => (
        <Link href={`/test-prep/${i.name}`} key={i.name}>
          <div className="w-11/12 m-auto mb-5 h-[70px] border border-gray-400 p-4 rounded-xl flex items-center justify-center cursor-pointer shadow-sm">
            <img src={i.image} className="object-contain w-full" alt={i.name} title={i.name}/>
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default ForExams;
