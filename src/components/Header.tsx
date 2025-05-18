"use client";

import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import profilePic from '../../public/user.png'; // Replace with the actual path to the profile picture

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center px-6 py-4 border-b border-gray-200">
      {/* Left Logo */}
      <div className="flex items-center gap-2 mb-4 sm:mb-0">
        <Image src={logo} alt="logo" width={40} height={40} />
        <span className="font-bold text-3xl sm:text-4xl">WhatBytes</span>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg border-gray-300 border-2 sm:w-auto w-28 sm:justify-start justify-center">
        <Image
          src={profilePic}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-bold text-sm sm:text-base">Ayush Vyas</span>
      </div>
    </div>
  );
};

export default Header;
