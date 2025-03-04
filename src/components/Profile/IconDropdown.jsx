import { removeUser } from "@/Redux/authSlice";
import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { useDispatch } from "react-redux";

const IconDropdown = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FcBusinessman className="text-4xl rounded-full border p-1" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
          <ul className="py-2 text-gray-700">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => alert("Go to Profile")}
            >
              Profile
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={onLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default IconDropdown;
