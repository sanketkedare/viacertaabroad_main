import React, { useState, useEffect, useRef } from "react";
import { successStories } from "../LaunchEvent/SuccessStories";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse
  const scrollRef = useRef(null);

  const studentsData = successStories;

  // Duplicate the data to create a seamless loop
  const duplicatedData = [...studentsData, ...studentsData];
  const totalScrollWidth = duplicatedData.length * 360; // Width of all cards combined (Assuming 350px card + 10px gap)

  useEffect(() => {
    const scrollSpeed = 0.5; // Control speed of scrolling (lower is slower)

    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + scrollSpeed * scrollDirection;

          if (newPosition <= 0) {
            setScrollDirection(1); // Reverse to forward direction
            return 0;
          } else if (newPosition >= totalScrollWidth / 2) {
            setScrollDirection(-1); // Reverse to backward direction
            return totalScrollWidth / 2;
          }

          return newPosition;
        });
      }
    };

    const interval = setInterval(scroll, 10); // Smooth animation update
    return () => clearInterval(interval);
  }, [isPaused, scrollDirection, totalScrollWidth]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  return (
    <div className="flex flex-col justify-center items-center lg:w-full py-10 overflow-hidden">
      <div className="py-10">
        <h1 className="lg:text-[40px] text-2xl font-bold mt-10 text-center  lg:flex gap-4 justify-center">
          Real Stories. Real Wins.
          <span className="bg-gradient-to-r px-2 from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            Now it’s Your Turn.
          </span>
        </h1>
        <h3 className="lg:text-[24px] text-xl mt-2 text-center">
          The next success story can be your
        </h3>
      </div>
      <div className="relative lg:w-11/12 overflow-hidden ">
        {/* Carousel Container */}
        <div
          className="flex gap-10 transition-transform duration-200 ease-linear"
          ref={scrollRef}
        >
          {duplicatedData.map((story, index) => (
            <article key={index} className="w-[350px] p-4 flex-shrink-0">
              <motion.div
                className="p-6 flex flex-col items-center bg-[#0168EF08] rounded-xl shadow-lg cursor-pointer transition duration-300 relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                whileHover={{
                  scale: 1.1,
                  transition: { ease: "easeOut", duration: 0.3 },
                }}
              >
                <p className="mt-3 text-gray-700 text-sm flex flex-col gap-3">
                  <FaQuoteLeft className="text-[#E00012] text-xl" />
                  <span className="h-[150px]">{story.description}</span>
                  <FaQuoteLeft className="text-[#E00012] text-xl rotate-180" />
                </p>

                <div className="flex justify-normal gap-4 w-full py-5">
                  <img
                    src={
                      story.image ||
                      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                    }
                    alt={`${story.name}'s Profile`}
                    className="w-15 h-15 rounded-full object-cover"
                    title={story.name}
                    loading="lazy"
                  />
                  <div>
                    <b>{story.name}</b>
                    <img
                      src="/universities/image2.png"
                      className="w-28"
                      title={story.name}
                      loading="lazy"
                      alt="university"
                    />
                  </div>
                </div>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
