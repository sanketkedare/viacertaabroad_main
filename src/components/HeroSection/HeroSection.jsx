import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnmatedButton";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const arr = ["Anywhere", "Destination", "Beyond"];

  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/28b5/559c/6164abe56474b0307901dd05b00ba0e3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uc-Po4YZ0z2pa2q1K1l9-fbAxW8yBnH3rmV3fJz-AN3v5ryuicuxujqN-LqyqwbxVusnnN0I49KSQbXLt6DHDy9O-St46AH7z0k5o17yje9inatbz2gnQUWUq8vxV~O0irRnX8GGwo5Rt8HX9aalefxxTw3Rdp2H7xqloegc7URar5PyCokq6R3tL~bpd3mppTlhLSFOdM2asoRPoURoV1x9rCrJBb~Vuw3HHZm-~r1UA1qxj7ItQ0X5XFN6VuEopO55nQdu5XKERVk5ExpWJnpXcRbXoTb-D9LbQB1CitQ~kKisVzWkOpUCOSYfnRWwfznCbHJp~~FG4WX3dfvKig__";

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
        className="w-full object-contain absolute -bottom-28 z-0"
        src={imageUrl}
        loading="lazy"
      />
      <div className="absolute w-full h-full insert-0 backdrop-opacity-75 bg-[#000000BF] z-10"></div>
      <div className="absolute z-20 w-full h-full flex flex-col gap-4 justify-center items-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold w-[1000px] text-[75px]"
        >
          From Here To{" "}
          <AnimatePresence mode="wait">
            <motion.b
              key={index}
              initial={{ opacity: 1, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity:1, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[#E00012]"
            >
              {arr[index]}
            </motion.b>
          </AnimatePresence>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[634px] text-[24px] text-xl text-center"
        >
          Explore top universities and unique cultural experiences worldwide.
        </motion.p>

        <AnimatedButton/>
      </div>
    </div>
  );
};

export default HeroSection;
