import React from 'react';
import Image from 'next/image';
import htmlLogo from '../../public/html_logo.png'; 
import { useDispatch } from 'react-redux';
import { showUpdateScores } from '@/store/modalSlice';

const Card = () => {
  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    dispatch(showUpdateScores());
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border border-gray-200 rounded-lg p-6 bg-white w-full space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Left Section: Logo and Text */}
      <div className="flex items-center gap-4">
        {/* HTML Logo */}
        <Image src={htmlLogo} alt="HTML Logo" width={50} height={50} />

        {/* Text Content */}
        <div>
          <h3 className="font-bold text-lg text-gray-800">
            Hyper Text Markup Language
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>

      {/* Right Section: Update Button */}
      <div className="border-black border-2 rounded-lg w-full sm:w-auto">
        <button
          className="bg-blue-900 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 w-full sm:w-auto"
          onClick={handleUpdateClick}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Card;
