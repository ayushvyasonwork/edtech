"use client"
import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, color }) => {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <div className="flex justify-between items-center ">
        <span className="text-gray-800 text-sm">{label}</span>
        
      </div>
      <div className=' flex  justify-between gap-4'>
      <div className=" w-full bg-gray-200 rounded-full h-2 mt-2 ">
        <div
          className=" flex h-2 rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
        
      </div>
      <span style={{ color }} className="font-bold text-sm ">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

interface AnalysisData {
  label: string;
  percentage: number;
  color: string;
}

const SyllabusAnalysis: React.FC = () => {
  const data: AnalysisData[] = [
    { label: 'HTML Tools, Forms, History', percentage: 80, color: '#3B82F6' },
    { label: 'Tags & References in HTML', percentage: 60, color: '#F97316' },
    { label: 'Tables & References in HTML', percentage: 24, color: '#EF4444' },
    { label: 'Tables & CSS Basics', percentage: 96, color: '#22C55E' },
  ];

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white w-full  flex flex-col gap-2">
      <h2 className="text-gray-800 font-bold mb-4">Syllabus Wise Analysis</h2>
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          percentage={item.percentage}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default SyllabusAnalysis;