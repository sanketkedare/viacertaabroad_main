"use client";

import { removeUser } from "@/Redux/authSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User, LayoutDashboard, LogOut, Edit } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const IconDropdown = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const onLogout = () => {
    localStorage.removeItem("viacerta-user");
    dispatch(removeUser());
  };

  return (
    <div className="relative">
      {/* Profile Icon */}
      <motion.div
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="text-2xl p-1 rounded-full bg-[#152347] w-[40px] h-[40px] border text-white flex justify-center items-center">
          {user?.name[0].toUpperCase()}
        </div>
      </motion.div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-[280px] p-4 flex flex-col gap-3"
          >
            <div className="flex flex-col text-center">
              <strong className="text-lg text-black">{user?.name}</strong>
              <span className="text-sm text-gray-600">{user?.email}</span>
            </div>

            <button className="w-full hover:bg-[#2c31b6] p-2 text-sm text-white bg-[#152347] rounded-lg flex items-center justify-center gap-2">
              <Edit size={16} /> Edit Profile
            </button>

            <hr />

            <ul className="py-2 text-gray-700">
              <Link href="/dashboard">
                <li className="flex items-center gap-2 px-4 py-2 hover:text-[#2c31b6] cursor-pointer rounded-md">
                  <LayoutDashboard size={18} className="text-gray-500" /> My Dashboard
                </li>
              </Link>
              <Link href="/profile">
                <li className="flex items-center gap-2 px-4 py-2 hover:text-[#2c31b6] cursor-pointer rounded-md">
                  <User size={18} className="text-gray-500" /> My Profile
                </li>
              </Link>
              <li
                className="flex items-center gap-2 px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer rounded-md"
                onClick={onLogout}
              >
                <LogOut size={18} className="text-red-500" /> Logout
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IconDropdown;
