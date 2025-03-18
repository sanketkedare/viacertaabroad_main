import React, { useState, useEffect, useRef } from "react";
import { successStories } from "../LaunchEvent/SuccessStories";
import { FaLinkedin } from "react-icons/fa6";

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
    <div className="flex flex-col justify-center items-center w-full py-10 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Students</h2>
      <div className="relative w-11/12 overflow-hidden ">
        {/* Carousel Container */}
        <div
          className="flex gap-10 transition-transform duration-200 ease-linear"
          ref={scrollRef}
        >
          {duplicatedData.map((story, index) => (
            <article key={index} className="w-[350px] p-4 flex-shrink-0">
              <div
                className="p-6 h-[450px] flex flex-col items-center bg-white rounded-xl  shadow-lg cursor-pointer transition duration-300 relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Profile Image */}
                <div className="relative w-24 h-24 mb-4">
                  <img
                    src={
                      story.image ||
                      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                    }
                    alt={`${story.name}'s Profile`}
                    className="w-full h-full  rounded-full object-cover"
                  />
                  <a
                    href={story.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-md"
                  >
                    <FaLinkedin size={20} className="text-blue-700" />
                  </a>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  {story.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1 text-center">
                  {story.university}
                </p>
                <p className="mt-3 font-bold text-[#f8b62d] text-center">
                  {story.scholarship}
                </p>
                <p className="mt-3 text-gray-700 text-center text-sm">
                  "{story.description}"
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
