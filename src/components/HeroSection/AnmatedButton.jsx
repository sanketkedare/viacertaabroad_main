import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <motion.button
      className="relative cursor-pointer w-[226px] h-[50px] bg-[#E00012] text-[#fff] rounded-[4px] overflow-hidden"
      onHoverStart={(e) => e.stopPropagation()} 
    >
      Explore All Courses
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute w-[300%] h-[3px] bg-white"
          initial={{ x: "-150%", y: "-150%", rotate: 45 }}
          animate={{ x: "150%", y: "150%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.button>
  );
};

export default AnimatedButton;
