import { destinations } from "./dropdowns";
import Link from "next/link";
import React from "react";


const ForDestinations = ({ setIsOpenDropdown }) => {
  const createUrl = (country ) => country.split(" ").join("-");
  return (
    <div
      className="absolute h-[500px] w-[800px] bg-white top-14 left-4/12 z-40 rounded-xl inset-0  backdrop-blur-3xl bg-opacity-50 p-6 grid grid-cols-4 gap-3"
      onClick={() => setIsOpenDropdown(false)}
    >
      {destinations.map((i) => (
        <Link href={`/destinations/${createUrl(i.name)}`}>
          <div
            key={i.name}
            className="border border-gray-400 p-2 px-4 rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <img src={i.flag} className="w-10" />

            {i.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ForDestinations;
