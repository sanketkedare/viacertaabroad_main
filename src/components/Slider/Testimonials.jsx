import React from "react";
import { successStories } from "../LaunchEvent/SuccessStories";

const Testimonials = () => {
  const studentsData = successStories;

  // Duplicate the data to create a seamless loop
  const duplicatedData = [...studentsData, ...studentsData];

  return (
    <div className="flex flex-col justify-center items-center w-full py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Students</h2>
      <div className="relative  w-10/12 overflow-hidden">
        {/* Carousel Container */}
        <div className="flex animate-scroll gap-10">
          {duplicatedData.map((story, index) => (
            <article
              key={index}
              className="w-64 p-4 flex-shrink-0"
            >
              <div className="p-6 h-[500px]  flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">{story.name}</h2>
                <p className="text-sm text-gray-500 mt-1 text-center">{story.university}</p>
                <p className="mt-3 font-bold text-[#f8b62d] text-center">{story.scholarship}</p>
                <p className="mt-3 text-gray-700 text-center ">{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;