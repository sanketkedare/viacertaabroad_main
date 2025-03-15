import countries from "@/Utils/countries";
import React, { useState } from "react";
import DestiHeroSection from "./DestiHeroSection";

const Destinations = () => {
  const all = {
    name: "All",
    flag: "",
    image: "https://www.edroots.com/uploads/media/study%20abroad63af3734b706c.jpg"
  };
  const allCounties = [all, ...countries];
  const [country, setCountry] = useState(all);

  return (
    <div className="py-10  min-h-[200vh]"> {/* Increased height for testing */}
    <p className="text-center font-bold">Select Country</p>
      <div className="w-9/12 m-auto sticky top-4 z-20">
        <div className="flex items-center w-full justify-between my-4   z-20 py-2"> {/* Added sticky top-4, z-20 & padding */}
          {allCounties.map((i) => (
            <button
              key={i.name}
              className={`p-2 px-4 border rounded-xl flex gap-2 bg-[#9d9eab] cursor-pointer hover:bg-[#635d96] text-[#fff] ${
                country.name === i.name && "bg-[#152347] "
              }`}
              onClick={() => setCountry(i)}
            >
              {i.flag && (
                <img src={i.flag} className="h-5 border items-center" alt={`${i.name} flag`} />
              )}
              {i.name}
            </button>
          ))}
        </div>
      </div>
      <DestiHeroSection country={country} />
    </div>
  );
};

export default Destinations;
