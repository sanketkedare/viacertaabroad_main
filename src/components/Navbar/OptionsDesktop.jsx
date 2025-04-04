import { usePathname } from "next/navigation";
import ForDestinations from "./ForDestinations";
import ForExams from "./ForExams";
import ForMBBS from "./ForMBBS";
import ForServices from "./ForServices";
import ForWork from "./ForWork";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import createUrl from "@/Utils/createUrl";

const OptionsDesktop = () => {
  const path = usePathname();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const navlinks = [
    { name: "Test Prep", link: "" },
    { name: "Destinations", link: "" },
    { name: "Services", link: "" },
  ];

  const dropdownHandler = (name) => {
    if (name === "Home") return;
    setIsOpenDropdown(name);
  };

  return (
    <>
      <Link href={"/"}>
        <div className="relative cursor-pointer hover:font-semibold  ">
          <div
            className={`hidden lg:flex  items-center justify-center gap-2 hover:text-[#E00012] '}`}
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
                path.includes(createUrl(option.name)) && "text-[#E00012] font-semibold"
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
      <Link href={"/study-abroad"}>
        <div className="relative cursor-pointer hover:font-semibold  ">
          <div
            className={`hidden lg:flex  items-center justify-center gap-2 hover:text-[#E00012]  ${
              path === "/study-abroad" && "text-[#E00002] font-bold"
            }`}
          >
            Study-Abroad
          </div>
        </div>
      </Link>
      <Link href={"/work"}>
        <div className="relative cursor-pointer hover:font-semibold  ">
          <div
            className={`hidden lg:flex  items-center justify-center gap-2 hover:text-[#E00012]  ${
              path === "/work" && "text-[#E00002] font-bold"
            }`}
          >
            Work
          </div>
        </div>
      </Link>
      {/* <Link href={"/blogs"}> */}
      <div className="relative cursor-pointer hover:font-semibold  ">
        <div
          className={`hidden lg:flex  items-center justify-center gap-2 hover:text-[#E00012] ${
            path === "/mbbs" && "text-[#E00002] font-bold"
          } `}
        >
          MBBS's Program
        </div>
      </div>
      {/* </Link> */}
      <Link href={"/blogs"}>
        <div className="relative cursor-pointer hover:font-semibold  ">
          <div
            className={`hidden lg:flex  items-center justify-center gap-2 hover:text-[#E00012]   ${path.includes("/blog") && "text-[#E00002] font-bold"}`}
          >
            Blogs
          </div>
        </div>
      </Link>
    </>
  );
};

export default OptionsDesktop;
