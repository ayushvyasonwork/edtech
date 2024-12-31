"use client";
import React from 'react'
import Card from './Card'
import QuickStatistics from './QuickStatistics'
import SyllabusAnalysis from './SyllabusAnalysis'
import ComparisonChart from './ComparisonChart'
import QuestionAnalysis from './QuestionAnalysis'

const MainContainer = () => {
  return (
    <div className='flex flex-col  w-5/6 h-[100vh] px-6 py-4'>
        <h1 className='my-0 px-6'>Skill test</h1>
        <div className='flex justify-around py-4'>
            <div className=' w-2/3 h-[100vh] flex items-center  flex-col px-6 gap-4'>
            <Card></Card>
            <QuickStatistics></QuickStatistics>
            <ComparisonChart></ComparisonChart>
            </div>
            <div className=' w-1/3 h-[100vh] flex flex-col items-center gap-4'>
                <SyllabusAnalysis></SyllabusAnalysis>
                <QuestionAnalysis></QuestionAnalysis>
            </div>
        </div>
    </div>
  )
}

export default MainContainer