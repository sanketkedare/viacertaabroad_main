import React from 'react'
import { destinations } from './dropdowns';

const ForDestinations = ({setIsOpenDropdown}) => {
  return (
    <div
    className="absolute min-h-[150px] w-[800px] bg-white top-14 left-4/12 z-30 rounded-xl inset-0  backdrop-blur-3xl bg-opacity-50 p-6 grid grid-cols-4 gap-3"
    onClick={() => setIsOpenDropdown(false)}
  >
      {destinations.map((i) => (
        <div
          key={i.name}
          className="border border-gray-400 p-2 px-4 rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <img src={i.image} className="w-10" />

          {i.name}
        </div>
      ))}
    </div>
  );
};

export default ForDestinations
