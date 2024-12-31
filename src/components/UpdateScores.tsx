"use client";
import React, { useState } from "react";
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

  const handleSave = () => {
    let isValid = true;

    // Validate Percentile
    if (percentile < 0 || percentile > 100) {
      setPercentileError("Required | Percentile must be between 0 and 100.");
      isValid = false;
    } else {
      setPercentileError(null);
    }

    // Validate Current Score
    if (currentScore < 0 || currentScore > 15) {
      setScoreError("Required | Score must be between 0 and 15.");
      isValid = false;
    } else {
      setScoreError(null);
    }

    if (isValid) {
      dispatch(
        updateScores({
          rank,
          percentile,
          currentScore,
        })
      );
      handleHide();
    }
  };

  const handleHide = () => {
    dispatch(hideUpdateScores());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/3 shadow-lg text-center">
        <div className="flex justify-between items-center py-2">
          <h2 className="text-lg font-bold">Update Scores</h2>
          <Image src={logo} alt="HTML Logo" width={30} height={30} />
        </div>

        <form className="space-y-4">
          <div className="flex justify-between">
            <label className="block text-sm font-semibold mb-2">1. Update your Rank</label>
            <input
              type="number"
              value={rank}
              onChange={(e) => setRank(Number(e.target.value))}
              className="px-3 py-2 border rounded-lg focus:outline-none border-blue-400 w-1/5"
            />
          </div>

          <div className="flex justify-between">
            <label className="block text-sm font-semibold mb-2">2. Update your Percentile</label>
            <div className="flex flex-col w-1/5">
              <input
                type="number"
                value={percentile}
                onChange={(e) => setPercentile(Number(e.target.value))}
                className={`px-3 py-2 border rounded-lg focus:outline-none ${
                  percentileError ? "border-red-500" : "border-blue-400"
                }`}
              />
              {percentileError && <span className="text-sm text-red-500">{percentileError}</span>}
            </div>
          </div>

          <div className="flex justify-between">
            <label className="block text-sm font-semibold mb-2">3. Update your Current Score (out of 15)</label>
            <div className="flex flex-col w-1/5">
              <input
                type="number"
                value={currentScore}
                onChange={(e) => setCurrentScore(Number(e.target.value))}
                className={`px-3 py-2 border rounded-lg focus:outline-none ${
                  scoreError ? "border-red-500" : "border-blue-400"
                }`}
              />
              {scoreError && <span className="text-sm text-red-500">{scoreError}</span>}
            </div>
          </div>
        </form>

        <div className="mt-6 flex justify-end gap-2">
          <button
            className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
            onClick={handleHide}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
