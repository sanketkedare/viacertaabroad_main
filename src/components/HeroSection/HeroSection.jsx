import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnmatedButton";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const arr = ["Anywhere", "Destination", "Beyond"];

  const imageUrl ='/banner.gif'

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative border h-[70vh] overflow-hidden">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:w-full lg:h-auto h-full lg:object-contain absolute bottom-0 lg:-bottom-28 z-0"
        src={imageUrl}
        loading="lazy"
        alt="viaCerta Abroad banner"
        title="viaCerta Abroad banner"

      />
      <div className="absolute w-full h-full insert-0 backdrop-opacity-75 bg-[#000000BF] z-10"></div>
      <div className="absolute z-20 w-full h-full flex flex-col lg:gap-4 gap-10 justify-center items-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold lg:w-[1000px] lg:text-[75px] text-5xl"
        >
          From Here To{" "}
          <br className="lg:hidden"/>
          <AnimatePresence mode="wait">
            <motion.b
              key={index}
              initial={{ opacity: 1, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity:1, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[#E00012] lg:text-left text-center "
            >
              {arr[index]}
            </motion.b>
          </AnimatePresence>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-[634px] text-[24px] text-xl text-center"
        >
          Explore top universities and unique cultural experiences worldwide.
        </motion.p>

        <AnimatedButton/>
      </div>
    </div>
  );
};

export default HeroSection;
