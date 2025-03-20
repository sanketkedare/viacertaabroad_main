import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";

const OptionsDesktop = () => {
  const path = usePathname();
  const navlinks = [
    "Test Prep",
    "Destination",
    "Services",
    "Work",
    "MBBS's Program",
  ];

  return (
    <>
      <div className="cursor-pointer hover:font-semibold flex items-center justify-center gap-2 hover:text-[#E00012]">
        <p>Home</p>
      </div>

      {navlinks.map((option) => (
        <div key={option} className="cursor-pointer hover:font-semibold flex items-center justify-center gap-2 hover:text-[#E00012]">
          {option} <IoIosArrowDown/>
        </div>
      ))}
    </>
  );
};

export default OptionsDesktop;
