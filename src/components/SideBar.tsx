"use client";
import React, { useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai"; // Icon for Dashboard
import { BsAward } from "react-icons/bs"; // Icon for Skill Test
import { HiOutlineDocument } from "react-icons/hi"; // Icon for Internship
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for Menu Button

const SideBar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div>
      {/* Sidebar for larger screens */}
      <div
        className={`hidden sm:flex w-[250px] h-screen bg-white border-r border-gray-200 flex-col items-start py-8 px-6 font-bold`}
      >
        {/* Menu Items */}
        {/* Dashboard */}
        <div className="flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer w-full">
          <AiOutlineBarChart className="text-lg" />
          <span className="text-gray-700 text-base">Dashboard</span>
        </div>

        {/* Skill Test */}
        <div className="flex items-center gap-4 px-3 py-3 bg-gray-100 rounded-lg cursor-pointer w-full">
          <BsAward className="text-lg text-blue-600" />
          <span className="font-bold text-blue-600 text-base">Skill Test</span>
        </div>

        {/* Internship */}
        <div className="flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer w-full">
          <HiOutlineDocument className="text-lg" />
          <span className="text-gray-700 text-base">Internship</span>
        </div>
      </div>

      {/* Sidebar toggle button for small screens */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg flex items-center gap-2"
      >
        {isSidebarVisible ? <AiOutlineClose /> : <AiOutlineMenu />}
        <span className="font-bold text-sm">{isSidebarVisible ? "Close" : "Menu"}</span>
      </button>

      {/* Sidebar for small screens */}
      {isSidebarVisible && (
        <div className="sm:hidden fixed top-0 left-0 w-[250px] h-full bg-white border-r border-gray-200 flex flex-col items-start py-14 px-6 font-bold z-40 shadow-lg">
          {/* Dashboard */}
          <div className="flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer w-full">
            <AiOutlineBarChart className="text-lg" />
            <span className="text-gray-700 text-base">Dashboard</span>
          </div>

          {/* Skill Test */}
          <div className="flex items-center gap-4 px-3 py-3 bg-gray-100 rounded-lg cursor-pointer w-full">
            <BsAward className="text-lg text-blue-600" />
            <span className="font-bold text-blue-600 text-base">Skill Test</span>
          </div>

          {/* Internship */}
          <div className="flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer w-full">
            <HiOutlineDocument className="text-lg" />
            <span className="text-gray-700 text-base">Internship</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
