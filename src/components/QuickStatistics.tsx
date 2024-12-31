import { RootState } from "@/store";
import React from "react";
import { FaTrophy, FaClipboardCheck, FaCheckSquare } from "react-icons/fa"; // Import icons
import { useSelector } from "react-redux";

const QuickStatistics = () => {
  // Accessing scores state from Redux store
  const { rank, percentile, currentScore } = useSelector(
    (state: RootState) => state.scores
  );

  return (
    <div className="flex flex-col items-center justify-around border border-gray-200 rounded-lg p-6 bg-white w-full">
      {/* Quick Statistics Title */}
      <div className="font-bold text-gray-800 w-full">Quick Statistics</div>

      {/* Statistics Items */}
      <div className="flex items-center space-x-6 w-full justify-around">
        {/* Rank */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center">
            <FaTrophy className="text-yellow-500 text-2xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-800 mt-2">{rank}</p>
            <p className="text-sm text-gray-500">YOUR RANK</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-l border-gray-300 h-full mx-4"></div>

        {/* Percentile */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center">
            <FaClipboardCheck className="text-gray-500 text-2xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-800 mt-2">{percentile}%</p>
            <p className="text-sm text-gray-500">PERCENTILE</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-l border-gray-300 h-full mx-4"></div>

        {/* Correct Answers */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center">
            <FaCheckSquare className="text-green-500 text-2xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-800 mt-2">
              {currentScore} / 15
            </p>
            <p className="text-sm text-gray-500">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
