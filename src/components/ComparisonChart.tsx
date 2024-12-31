"use client";
import graph from "../../public/statistics.png";
import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// Registering the necessary components of Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const ComparisonChart: React.FC = () => {
  const chartRef = useRef<any>(null); // Reference to the chart instance
  const [linePosition, setLinePosition] = useState(0); // State to store the vertical line position

  // Accessing the percentile from Redux store
  const { percentile } = useSelector((state: RootState) => state.scores);

  // Base dataset
  const baseData = [
    { x: 0, y: 1 },
    { x: 10, y: 2 },
    { x: 20, y: 4 },
    { x: 30, y: 8 },
    { x: 35, y: 12 },
    { x: 40, y: 14 },
    { x: 45, y: 16 },
    { x: 50, y: 25 },
    { x: 55, y: 20 },
    { x: 60, y: 11 },
    { x: 70, y: 4 },
    { x: 83, y: 2 },
    { x: 86, y: 6 },
    { x: 100, y: 1 },
  ];

  // Function to compute the number of students for the given percentile
  const computeStudents = (percentile: number): number => {
    return Math.max(1, Math.floor((100 - percentile) / 10)); // Adjust as needed
  };

  // Function to calculate the average percentile
  const calculateAveragePercentile = (): number => {
    const totalPercentile = baseData.reduce((sum, point) => sum + point.x, 0);
    return totalPercentile / baseData.length;
  };

  const averagePercentile = calculateAveragePercentile();
  const isHigher = percentile > averagePercentile;

  // Add the user's percentile dynamically
  const updatedData = [...baseData, { x: percentile, y: computeStudents(percentile) }].sort(
    (a, b) => a.x - b.x
  );

  const data = {
    labels: updatedData.map((point) => point.x),
    datasets: [
      {
        data: updatedData,
        borderColor: "#6c63ff",
        pointBackgroundColor: updatedData.map((point) =>
          point.x === percentile ? "#ff0000" : "#ffffff"
        ),
        pointBorderWidth: updatedData.map((point) => (point.x === percentile ? 2 : 1)),
        pointHoverRadius: updatedData.map((point) => (point.x === percentile ? 6 : 5)),
        borderWidth: 1,
        tension: 0.2,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw.y;
            return `Number of Students: ${value}`;
          },
        },
        backgroundColor: "#ffffff",
        borderColor: "#6c63ff",
        borderWidth: 1,
        titleColor: "#000",
        bodyColor: "#000",
        displayColors: false,
      },
    },
    scales: {
      x: {
        type: "linear",
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#888",
        },
        title: {
          display: true,
          text: "Percentile",
          color: "#555",
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
  };

  // Calculate the exact position of the vertical line after chart renders
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current; // Access the Chart.js instance directly
      const datasetMeta = chart.getDatasetMeta(0); // Meta information for the first dataset
      const xScale = datasetMeta.xScale;
      const position = xScale.getPixelForValue(percentile); // Get the pixel position for the percentile
      setLinePosition(position); // Update the line position
    }
  }, [percentile, updatedData]);

  return (
    <div className="mx-auto bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Comparison Graph</h2>
      <div className="flex justify-between gap-4">
        <p className="text-sm text-gray-600 mb-4">
          <strong className="text-gray-900">You scored {percentile}% percentile</strong>, 
          which is <strong>{isHigher ? "higher" : "lower"}</strong> than the average percentile 
          (<strong>{averagePercentile.toFixed(2)}%</strong>) of all engineers who took this assessment.
        </p>
        <Image src={graph} alt="graph icon" width={40} height={40} />
      </div>
      <div className="relative">
        <Line ref={chartRef} data={data} options={options} />
        {/* Vertical Line */}
        <div
          className="absolute border-l-2 border-gray-300 h-full"
          style={{ left: `${linePosition}px`, top: 0 }}
        ></div>
        <p
          className="absolute"
          style={{
            left: `${linePosition}px`,
            top: "calc(100% - 20px)",
            transform: "translateX(-50%)",
          }}
        >
          <span className="text-sm text-gray-500 italic">your percentile</span>
        </p>
      </div>
    </div>
  );
};

export default ComparisonChart;
