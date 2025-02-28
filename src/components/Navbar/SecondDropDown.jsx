import React, { useEffect, useState } from "react";
import { countries, exams, more, resources, topStreams } from "./utils";

const SecondDropDown = ({ openDropdown }) => {
  const [sideBar, setSidebar] = useState([]);
  const [sidebarLink, setSidebarLink] = useState("USA");

  useEffect(() => {
    switch (openDropdown) {
      case "Countries":
        setSidebar(countries);
        break;
      case "Exams":
        setSidebar(exams);
        break;
      case "Resources":
        setSidebar(resources);
        break;
      default:
        setSidebar(more);
        break;
    }
  }, [openDropdown]);

  return (
    <div className="w-full grid grid-cols-6 bg-gray-50">
      {/* Sidebar */}
      <div className="col-span-1 flex flex-col gap-2 font-bold overflow-y-auto bg-gray-100 p-2">
        {sideBar.map((item, index) => (
          <button
            key={index}
            className={`text-left p-2 pl-2 hover:bg-gray-300 ${
              sidebarLink === item ? "border-l-4 border-[#152347] bg-white" : ""
            }`}
            onClick={() => setSidebarLink(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="col-span-5 p-4">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, colIndex) => (
            <div key={colIndex} className="col-span-1">
              <p className="font-bold mb-2">TOP STREAMS</p>
              <div className="space-y-1">
                {topStreams.map((stream, index) => (
                  <p key={index} className="text-gray-700">{stream}</p>
                ))}
                <p className="text-[#2c31b6] cursor-pointer hover:underline">
                  {`View all ${sidebarLink} Courses`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Button in the Second Column */}
        <div className="flex justify-center mt-6 col-span-4">
          <button className="text-[#152347] p-2 border border-[#152347] rounded-xl px-4 hover:bg-[#152347] hover:text-white transition">
            Explore Study in {sidebarLink}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondDropDown;
