import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import { FaHome, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaBlog, FaBook, FaServicestack } from "react-icons/fa6";

const OptionsDesktop = () => {
  const path = usePathname();
  const navlinks = [
    { name: "Home", icon: <FaHome /> , link:''},
    { name: "Test Prep", icon: <FaBook /> , link:'' },
    { name: "Destinations", icon: <FaMapMarkerAlt />  , link:''},
    { name: "Services", icon: <FaServicestack />  , link:''},
    { name: "Work", icon: <FaBlog />  , link:''},
    { name: "MBBS's Program", icon: <FaPhoneAlt /> , link:'' },
  ];

  return (
    <>
      {navlinks.map((option) => (
        <div key={option.name} className="cursor-pointer hover:font-semibold hidden lg:flex  items-center justify-center gap-2 hover:text-[#E00012]">
          {option.name} {option.name !== "Home" && <IoIosArrowDown/>}
        </div>
      ))}
    </>
  );
};

export default OptionsDesktop;
