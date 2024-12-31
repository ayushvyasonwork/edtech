"use client"
import React from 'react';
import { AiOutlineBarChart } from 'react-icons/ai'; // Icon for Dashboard
import { BsAward } from 'react-icons/bs'; // Icon for Skill Test
import { HiOutlineDocument } from 'react-icons/hi'; // Icon for Internship

const SideBar = () => {
  return (
    <div className="w-1/6 h-[130vh] bg-white border-x border-gray-200 flex flex-col items-start py-8 space-y-4 font-bold">
      {/* Menu Items */}
      
        {/* Dashboard */}
        <div className="flex items-center gap-3 px-3 py-2  rounded-lg cursor-pointer w-full ">
          <AiOutlineBarChart className="text-xl" />
          <span className=" text-gray-700 font-bold">Dashboard</span>
        </div>

        {/* Skill Test */}
        <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg cursor-pointer w-full">
          <BsAward className="text-xl text-blue-600" />
          <span className="font-bold text-blue-600">Skill Test</span>
        </div>

        {/* Internship */}
        <div className="flex items-center gap-3 px-3 py-2  rounded-lg cursor-pointer w-full">
          <HiOutlineDocument className="text-xl" />
          <span className="font-bold text-gray-700">Internship</span>
        </div>
      </div>
    
  );
};

export default SideBar;
