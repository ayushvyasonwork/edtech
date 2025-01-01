"use client";
import React from 'react';
import Card from './Card';
import QuickStatistics from './QuickStatistics';
import SyllabusAnalysis from './SyllabusAnalysis';
import ComparisonChart from './ComparisonChart';
import QuestionAnalysis from './QuestionAnalysis';

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full h-[200vh] px-6 py-4">
      <h1 className="my-0 px-6">Skill test</h1>
      <div className="flex flex-col md:flex-row justify-between h-full gap-4 ">
        {/* Left Side (Cards and Statistics) */}
        <div className="w-full md:w-2/3 h-auto md:h-[120vh] flex items-center flex-col px-6 gap-4">
          <Card />
          <QuickStatistics />
          <ComparisonChart />
        </div>

        {/* Right Side (Syllabus Analysis and Question Analysis) */}
        <div className="w-full md:w-1/3 h-auto flex flex-col items-center gap-4 md:block  px-6">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
