"use client";

import React, { useEffect, useState } from "react";
import logo from "../../public/html_logo.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdateScores } from "@/store/modalSlice";
import { updateScores } from "@/store/scoresSlice";
import { RootState } from "@/store";

const UpdateScores = () => {
  const { rank: iniRank, percentile: iniPercentile, currentScore: iniScore } = useSelector(
    (state: RootState) => state.scores
  );
  const [rank, setRank] = useState<number>(iniRank);
  const [percentile, setPercentile] = useState<number>(iniPercentile);
  const [currentScore, setCurrentScore] = useState<number>(iniScore);

  const [percentileError, setPercentileError] = useState<string | null>(null);
  const [scoreError, setScoreError] = useState<string | null>(null);

  const dispatch = useDispatch();

  // ✅ Load rank from localStorage safely (browser-only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRank = localStorage.getItem("rank");
      if (storedRank) {
        setRank(parseInt(storedRank));
      }
    }
  }, []);

  const handleSave = () => {
    let isValid = true;

    if (percentile < 0 || percentile > 100) {
      setPercentileError("Required | Percentile must be between 0 and 100.");
      isValid = false;
    } else {
      setPercentileError(null);
    }

    if (currentScore < 0 || currentScore > 15) {
      setScoreError("Required | Score must be between 0 and 15.");
      isValid = false;
    } else {
      setScoreError(null);
    }

    if (isValid) {
      dispatch(updateScores({ rank, percentile, currentScore }));
      if (typeof window !== "undefined") {
        localStorage.setItem("rank", rank.toString());
      }
      handleHide();
    }
  };

  const handleHide = () => {
    dispatch(hideUpdateScores());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 sm:w-4/5 md:w-1/3 shadow-lg text-center w-full max-w-lg">
        <div className="flex justify-between items-center py-2">
          <h2 className="text-lg font-bold">Update Scores</h2>
          <Image src={logo} alt="HTML Logo" width={30} height={30} />
        </div>

        <form className="space-y-6">
          {/* Rank Input */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <label className="block text-sm font-semibold sm:mb-0 w-full sm:w-1/3">
              1. Update your Rank
            </label>
            <input
              type="number"
              value={rank}
              onChange={(e) => setRank(Number(e.target.value))}
              className="px-3 py-2 border rounded-lg focus:outline-none border-blue-400 w-full sm:w-2/3"
            />
          </div>

          {/* Percentile Input */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <label className="block text-sm font-semibold sm:mb-0 w-full sm:w-1/3">
              2. Update your Percentile
            </label>
            <div className="w-full sm:w-2/3">
              <input
                type="number"
                value={percentile}
                onChange={(e) => setPercentile(Number(e.target.value))}
                className={`px-3 py-2 border rounded-lg focus:outline-none w-full ${
                  percentileError ? "border-red-500" : "border-blue-400"
                }`}
              />
              {percentileError && <span className="text-sm text-red-500">{percentileError}</span>}
            </div>
          </div>

          {/* Current Score Input */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <label className="block text-sm font-semibold sm:mb-0 w-full sm:w-1/3">
              3. Update your Current Score (out of 15)
            </label>
            <div className="w-full sm:w-2/3">
              <input
                type="number"
                value={currentScore}
                onChange={(e) => setCurrentScore(Number(e.target.value))}
                className={`px-3 py-2 border rounded-lg focus:outline-none w-full ${
                  scoreError ? "border-red-500" : "border-blue-400"
                }`}
              />
              {scoreError && <span className="text-sm text-red-500">{scoreError}</span>}
            </div>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
          <button
            className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 w-full sm:w-auto"
            onClick={handleHide}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto"
            onClick={handleSave}
          >
            Save →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateScores;
