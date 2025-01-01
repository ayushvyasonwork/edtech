"use client";
import React from 'react';
import { AiOutlineBarChart } from 'react-icons/ai'; // Icon for Dashboard
import { BsAward } from 'react-icons/bs'; // Icon for Skill Test
import { HiOutlineDocument } from 'react-icons/hi'; // Icon for Internship

const SideBar = () => {
  return (
    <div className="w-full sm:w-1/5 md:w-1/6 h-[200vh] bg-white border-x border-gray-200 flex flex-col items-start py-8 space-y-4 font-bold">
      {/* Menu Items */}
      
      {/* Dashboard */}
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer w-full">
        <AiOutlineBarChart className="text-xl sm:text-lg md:text-sm" />
        <span className="text-gray-700 font-bold text-sm sm:text-base md:text-lg">
          Dashboard
        </span>
      </div>

      {/* Skill Test */}
      <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg cursor-pointer w-full">
        <BsAward className="text-xl sm:text-lg md:text-xl text-blue-600" />
        <span className="font-bold text-blue-600 text-sm sm:text-base md:text-lg">
          Skill Test
        </span>
      </div>

      {/* Internship */}
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer w-full">
        <HiOutlineDocument className="text-xl sm:text-lg md:text-xl" />
        <span className="font-bold text-gray-700 text-sm sm:text-base md:text-lg">
          Internship
        </span>
      </div>
    </div>
  );
};

export default SideBar;
