"use client";
// import graph from "../../public/statistics.png";
import React, { useRef, useEffect, useState } from "react";
import { VscGraphLine } from "react-icons/vsc";
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
    { x: 90, y: 3 },
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
        pointBackgroundColor: "#ffffff",
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
    maintainAspectRatio: false, // Important to allow custom height on responsive charts
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
    const resizeHandler = () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.chartInstance || chartRef.current;
        const xScale = chartInstance.scales["x"]; // Access the x-axis scale
        const position = xScale.getPixelForValue(percentile); // Get the pixel position for the percentile
        setLinePosition(position); // Update the vertical line position
      }
    };

    // Initial calculation
    resizeHandler();

    // Add a listener to recalculate on window resize
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler); // Cleanup
  }, [percentile]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-6 py-2 flex flex-col w-full">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Comparison Graph</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <p className="text-sm text-gray-600">
          <strong className="text-gray-900">You scored {percentile}% percentile</strong>, which is{" "}
          <strong>{isHigher ? "higher" : "lower"}</strong> than the average percentile (
          <strong>{averagePercentile.toFixed(2)}%</strong>) of all engineers who took this assessment.
        </p>
        <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center max-h-12">
          <VscGraphLine className="text-red-500 text-2xl" />
        </div>
      </div>
      {/* Container for the chart */}
      <div className="relative w-full" style={{ height: "400px" }}>
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
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-sm text-gray-500 italic">your percentile</span>
        </p>
      </div>
    </div>
  );
};

export default ComparisonChart;
