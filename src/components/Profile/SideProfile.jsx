import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { LayoutDashboard, FileText, Users, ClipboardList, BookOpen, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

const SideProfile = () => 
{
  const user = useSelector(state => state.user.user);
  if(!user)
  {
    return <div>Loading....</div>
  }
  return (
    <div className="hidden lg:block w-1/5 pb-10">
      <div className="sticky top-4 shadow-xl rounded-xl bg-white p-4 flex flex-col items-center gap-6 min-h-[500px]">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-3">
          <FaCircleUser className="text-6xl text-[#152347]" />
          <p className="text-lg font-semibold">{user?.name}</p>
          <Link href="/profile">
            <button className="p-2 px-6 bg-[#152347] text-white rounded-lg text-sm hover:bg-[#1a2e5b] transition">
              View My Profile
            </button>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="w-full">
          <ul className="flex flex-col gap-3 text-gray-700 w-full text-sm ">
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              <LayoutDashboard size={20} className="text-[#152347]" /> Dashboard
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              <FileText size={20} className="text-[#152347]" /> Submit Documents
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Users size={20} className="text-[#152347]" /> Counselor
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              <ClipboardList size={20} className="text-[#152347]" /> Application
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              <BookOpen size={20} className="text-[#152347]" /> Courses for You
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              <HelpCircle size={20} className="text-[#152347]" /> Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideProfile;
