"use client"

import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import profilePic from '../../public/user.png'; // Replace with the actual path to the profile picture

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" width={40} height={40} />
        <span className=" font-bold text-4xl">WhatBytes</span>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-2  px-4 py-2 rounded-lg border-gray-300 border-2">
        <Image
          src={profilePic}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-bold">Rahil Siddique</span>
      </div>
    </div>
  );
};

export default Header;
