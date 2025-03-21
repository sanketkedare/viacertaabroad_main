import React from "react";
import { services } from "./dropdowns";
import Link from "next/link";

const ForServices = ({ setIsOpenDropdown }) => {
  return (
    <Link href={'/services'}>
      <div
        className="absolute min-h-[250px] w-[900px] bg-white top-14 left-4/12 z-30 rounded-xl inset-0  backdrop-blur-3xl bg-opacity-50 p-6 grid grid-cols-3 gap-3"
        onClick={() => setIsOpenDropdown(false)}
      >
        {services.map((i, index) => (
          <div
            key={i.name}
            className="border border-[#E00012] rounded-[14px] p-2 px-4 flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <img src={`/services/image${index + 1}.png`} className="w-10" />

            {i.name}
          </div>
        ))}

        <button className=" bg-[#E00012]  text-[#fff] rounded-[14px] p-2 px-4 flex items-center gap-2 cursor-pointer shadow-sm">
          <img className="w-10" />
          Explore All services
        </button>
      </div>
    </Link>
  );
};

export default ForServices;
