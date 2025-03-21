import React from "react";

const DropDown = (isOpenDropdown, setIsOpenDropdown) => {
  return (
    <div
      className="absolute min-h-[300px] w-[800px] bg-white top-14 left-4/12 z-30 rounded-xl inset-0  backdrop-blur-3xl bg-opacity-50 p-6"
      onClick={() => setIsOpenDropdown(false)}
    >
      {isOpenDropdown}
    </div>
  );
};

export default DropDown;
