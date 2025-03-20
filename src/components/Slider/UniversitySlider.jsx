import React, { useState, useEffect, useRef } from "react";

const UniversitySlider = () => {
  const arr = Array.from({ length: 7 }).fill(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(-1);
  const scrollRef = useRef(null);
  const mobileScrollRef = useRef(null);

  const duplicatedData = [...arr, ...arr]; // Duplicate the array for smooth looping
  const totalScrollWidth = duplicatedData.length * 210; // Width of each image is assumed to be 210px

  useEffect(() => {
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + scrollSpeed;

          if (newPosition >= totalScrollWidth / 2) {
            return 0; // Reset to the beginning for smooth looping
          }
          return newPosition;
        });
      }
    };

    const interval = setInterval(scroll, 10);
    return () => clearInterval(interval);
  }, [isPaused, totalScrollWidth]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  // Mobile Scrolling Effect (Reversing)
  useEffect(() => {
    const mobileScrollSpeed = 0.5;

    const scrollMobile = () => {
      if (!isPaused && mobileScrollRef.current) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + mobileScrollSpeed * scrollDirection;

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

    const interval = setInterval(scrollMobile, 10);
    return () => clearInterval(interval);
  }, [isPaused, scrollDirection, totalScrollWidth]);

  useEffect(() => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  return (
    <div
      className="relative overflow-hidden w-full py-6 lg:mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="lg:py-10">
        <h1 className="lg:text-[40px] text-4xl font-bold mt-10 text-center lg:flex gap-4 justify-center">
          So Many Choices But Only
          <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text px-2">
            One Right Move
          </span>
        </h1>
        <h3 className="lg:text-[24px] text-xl lg:mt-2 mt-5 text-center">
          Your right fit is closer than you think.
        </h3>
      </div>

      {/* Desktop & Large Screen Slider (Continuous Loop) */}
      <div className="flex items-center w-full m-auto my-10 overflow-hidden">
        <div className="flex w-max gap-10" ref={scrollRef}>
          {duplicatedData.map((_, index) => (
            <img
              key={index}
              src={`/universities/image${index % 7}.png`}
              loading="lazy"
              alt={`University ${index % 7}`}
              className="mx-2"
            />
          ))}
        </div>
      </div>

      {/* Mobile Slider (Reversing Effect) */}
      <div className="lg:hidden flex items-center w-full m-auto my-10 overflow-hidden">
        <div className="flex w-max gap-10" ref={mobileScrollRef}>
          {duplicatedData.reverse().map((_, index) => (
            <img
              key={index}
              src={`/universities/image${7- index - 1}.png`}
              loading="lazy"
              alt={`University ${7- index - 1}`}
              className="mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversitySlider;
