import ForDestinations from "./ForDestinations";
import ForExams from "./ForExams";
import ForMBBS from "./ForMBBS";
import ForServices from "./ForServices";
import ForWork from "./ForWork";
import { destinations, textPrep } from "./dropdowns";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHome, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaBlog, FaBook, FaServicestack } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const OptionsDesktop = () => {
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const path = usePathname();
  const navlinks = [
    { name: "Test Prep", icon: <FaBook />, link: "" },
    { name: "Destinations", icon: <FaMapMarkerAlt />, link: "" },
    { name: "Services", icon: <FaServicestack />, link: "" },
    { name: "Study-Abroad", icon: <FaServicestack />, link: "" },
    { name: "Work", icon: <FaBlog />, link: "" },
    { name: "MBBS's Program", icon: <FaPhoneAlt />, link: "" },
  ];

  const dropdownHandler = (name) => {
    if (name === "Home") return;
    setIsOpenDropdown(name);
  };

  const updatedDropdownOptions = () => {
    switch (isOpenDropdown) {
      case "Test Prep":
        setDropDownOptions(textPrep);
        break;
      case "Destinations":
        setDropDownOptions(destinations);
        break;
      default:
        setDropDownOptions(isOpenDropdown);
    }
  };

  useEffect(() => {
    if (!isOpenDropdown) return;
    updatedDropdownOptions();
  }, [isOpenDropdown]);

  return (
    <>
      <Link href={"/"}>
        <div className="relative cursor-pointer hover:font-semibold  ">
          <div
            className={`hidden lg:flex  items-center justify-center gap-2 hover:text-[#E00012] `}
          >
            Home
          </div>
        </div>
      </Link>
      {navlinks.map((option) => (
        <>
          <div
            key={option.name}
            className="relative cursor-pointer hover:font-semibold  "
          >
            <div
              className={`hidden lg:flex  items-center justify-center gap-2 hover:text-[#E00012] ${
                option.name === isOpenDropdown && "text-[#E00012] font-semibold"
              }`}
              onClick={() => dropdownHandler(option.name)}
            >
              {option.name} {option.name !== "Home" && <IoIosArrowDown />}
            </div>

            {/* Dropdown */}
          </div>

          {isOpenDropdown &&
            (isOpenDropdown === "Test Prep" ? (
              <ForExams setIsOpenDropdown={setIsOpenDropdown} />
            ) : isOpenDropdown === "Destinations" ? (
              <ForDestinations setIsOpenDropdown={setIsOpenDropdown} />
            ) : isOpenDropdown === "Services" ? (
              <ForServices setIsOpenDropdown={setIsOpenDropdown} />
            ) : isOpenDropdown === "Work" ? (
              <ForWork setIsOpenDropdown={setIsOpenDropdown} />
            ) : (
              <ForMBBS setIsOpenDropdown={setIsOpenDropdown} />
            ))}
        </>
      ))}
    </>
  );
};

export default OptionsDesktop;
