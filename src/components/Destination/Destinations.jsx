import countries from "@/Utils/countries";
import React, { useState } from "react";
import DestiHeroSection from "./DestiHeroSection";
import { motion } from "framer-motion";
import { BiWorld } from "react-icons/bi";

const Destinations = () => {
  const all = {
    name: "All",
    flag: "",
    image: "https://www.edroots.com/uploads/media/study%20abroad63af3734b706c.jpg"
  };
  const allCounties = [all, ...countries];
  const [country, setCountry] = useState(all);

  return (
    <div className="py-10 min-h-[200vh]">
      <p className="text-center font-bold text-2xl mb-6">Select Country</p>

      <div className="w-10/12 m-auto sticky top-4 z-20">
        {/* Here scroll bar is apearing remove it visualy */}
        <div className="flex items-center w-full m-auto my-4 py-2 overflow-x-auto scrollbar-hide">
          {allCounties.map((i) => (
            <motion.button
              key={i.name}
              className={`p-2 m-auto border rounded-xl flex mx-2 w-auto bg-[#152347] cursor-pointer hover:bg-[#635d96] text-[#fff] transition-colors duration-300 ${
                country.name === i.name && "bg-amber-300 text-black"
              }`}
              onClick={() => setCountry(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             {i.name}
            </motion.button>
          ))}
        </div>
      </div>

      <DestiHeroSection country={country} />
    </div>
  );
};

export default Destinations;
