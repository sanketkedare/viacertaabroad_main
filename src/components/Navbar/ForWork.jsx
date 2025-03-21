import React from 'react'
import { destinations } from './dropdowns';

const ForWork = ({setIsOpenDropdown}) => {
  return
  return (
    <div
    className="absolute min-h-[300px] w-[800px] bg-white top-14 left-4/12 z-30 rounded-xl inset-0  backdrop-blur-3xl bg-opacity-50 p-6 flex items-center gap-5 flex-wrap"
    onClick={() => setIsOpenDropdown(false)}
  >
      {destinations.map((i) => (
        <div
          key={i.name}
          className="w-1/5 h-[100px] border border-gray-400 p-4 rounded-xl flex items-center justify-center cursor-pointer shadow-sm"
        >
          <img src={i.image} className="object-contain w-full" />
        </div>
      ))}
    </div>
  );
};


export default ForWork
