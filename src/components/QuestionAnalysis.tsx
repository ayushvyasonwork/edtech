"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import logo from "../../public/target-icon.png"; // Update as needed

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis: React.FC = () => {
  // Accessing Redux store for the current score
  const { currentScore: correctAnswers } = useSelector((state: RootState) => state.scores);
  const totalQuestions = 15; // Total number of questions

  const incorrectAnswers = totalQuestions - correctAnswers;

  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["#4299e1", "#e2e8f0"], // Blue for correct, gray for incorrect
        borderWidth: 0, // Clean look
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "80%", // Inner white space
    rotation: 90, // Start at 12 o'clock
    circumference: 360, // Full circle for anti-clockwise movement
    plugins: {
      legend: {
        display: false, // Hide legend for a cleaner UI
      },
      tooltip: {
        enabled: false, // Disable tooltips for simplicity
      },
    },
  };

  return (
    <div className="mx-auto bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between">
        <h2 className="text-md font-bold text-gray-800 mb-2">Question Analysis</h2>
        <span className="text-blue-600 font-bold">
          {correctAnswers}/{totalQuestions}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        <span className="font-bold">
          You scored {correctAnswers} questions correct out of {totalQuestions}.
        </span>{" "}
        <span>Keep practicing to improve further!</span>
      </p>
      <div className="flex justify-center w-full h-full">
        <div className="flex items-center justify-center w-2/3 h-2/3 relative">
          <Doughnut data={data} options={options} />
          <div className="absolute bg-white rounded-full h-12 w-12 flex items-center justify-center">
            <Image src={logo} alt="Target Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
