import React, { useState, useEffect, useRef } from "react";

const UniversitySlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(-1);
  const scrollRef = useRef(null);

  const universitiesData = [
    {
      id: 1,
      name: "Harvard University",
      location: "USA",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_n_b0KIaq9XjUTLfFRzmMZQNZ9lPzKVXCQ&s",
    },
    {
      id: 2,
      name: "Oxford University",
      location: "UK",
      logo: "https://oxfordvisit.com/wp-content/uploads/2022/05/oxford-university-logo_quad.jpg",
    },
    {
      id: 3,
      name: "Stanford University",
      location: "USA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/800px-Seal_of_Leland_Stanford_Junior_University.svg.png",
    },
    {
      id: 4,
      name: "MIT",
      location: "USA",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2JoLLmjfdYZ2Twavh6nDP0ooCeayukb0Ww&s",
    },
    {
      id: 5,
      name: "University of Tokyo",
      location: "Japan",
      logo: "https://www.u-tokyo.ac.jp/content/400235961.png",
    },
  ];

  const duplicatedData = [...universitiesData, ...universitiesData];
  const totalScrollWidth = duplicatedData.length * 350;

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
      className="relative overflow-hidden w-full py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
        <p className="text-3xl text-center my-10 font-bold">Top Universities</p>
      <div className="flex w-max" ref={scrollRef}>
        {duplicatedData.map((university, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 m-3 p-4 rounded-2xl shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 transition-transform transform hover:scale-105 w-[350px] h-[160px]"
          >
            <img
              src={university.logo}
              alt={`${university.name} logo`}
              className="object-contain w-2/5 h-2/3 transition-transform transform hover:scale-110"
            />
            <div className="w-3/5 text-[#152347]">
              <h2 className="text-xl font-bold mb-1">{university.name}</h2>
              <p className="text-sm text-gray-600">{university.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversitySlider;
