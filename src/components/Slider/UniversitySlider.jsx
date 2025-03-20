import React, { useState, useEffect, useRef } from "react";

const UniversitySlider = () => {
  const arr = Array.from({ length: 7 }).fill(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(-1);
  const scrollRef = useRef(null);

  const duplicatedData = [...arr, ...arr]; // Duplicate the array for smooth looping
  const totalScrollWidth = duplicatedData.length * 210; // Width of each image is assumed to be 210px

  useEffect(() => {
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + scrollSpeed * scrollDirection;

          if (newPosition <= 0) {
            setScrollDirection(1);
            return 0;
          } else if (newPosition >= totalScrollWidth / 2) {
            setScrollDirection(-1);
            return totalScrollWidth / 2;
          }

          return newPosition;
        });
      }
    };

    const interval = setInterval(scroll, 10);
    return () => clearInterval(interval);
  }, [isPaused, scrollDirection, totalScrollWidth]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  return (
    <div
      className="relative overflow-hidden w-full py-6 mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="py-10">
        <h1 className="text-[40px] font-bold mt-10 text-center  flex gap-4 justify-center">
          So Many Choices But Only
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
            One Right Move
          </span>
        </h1>
        <h3 className="text-[24px] mt-2 text-center">
          Your right fit is closer than you think.
        </h3>
      </div>

      <div className="flex items-center  w-full m-auto my-10 overflow-hidden">
        <div className="flex w-max gap-10" ref={scrollRef}>
          {duplicatedData.map((_, index) => (
            <img
              key={index}
              src={`/universities/image${index % 7}.png`}
              loading="lazy"
              className="mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversitySlider;