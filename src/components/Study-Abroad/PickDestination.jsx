import React, { useState } from "react";
import destinationJson from "@/components/Destination/destinations.json";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";
import createUrl from "@/Utils/createUrl";

const PickDestination = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  

  return (
    <div className="my-10  w-10/12 m-auto">
      <p className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
        Pick Your Perfect{" "}
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
          Study Destination
        </span>
      </p>
      <p className="py-4 lg:text-2xl text-center">
        Find the best country for your studies based on your goals and career
        plans
      </p>

      {/* Slider Here */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide py-10">
        <div className="flex items-center gap-4">
          {destinationJson.map((i, index) => (
            <Link href={`/destinations/${createUrl(i.name)}`}>
            <div
              key={index}
              className="w-[250px] h-[150px] shadow-2xl shrink-0 rounded-2xl overflow-hidden relative bg-black"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <small className="p-1 px-3 absolute top-3 right-0 bg-[#F8C600] font-bold z-10">
                {i.name}
              </small>
              <button
                className={`absolute bottom-2 w-full text-white z-10 flex justify-center gap-2 items-center ${
                  hoverIndex !== index && "hidden"
                }`}
              >
                <small>Explore Now</small>
                <IoArrowForwardCircleOutline className="text-xl" />
              </button>
              <img
                src={i.banner}
                className=" h-full w-full object-cover hover:opacity-80"
                loading="lazy"
                alt={i.name}
              />
            </div></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PickDestination;
