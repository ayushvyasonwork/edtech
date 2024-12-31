"use client";
import Header from "@/components/Header";

import MainContainer from "@/components/MainContainer";

import SideBar from "@/components/SideBar";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import UpdateScores from "../components/UpdateScores";

export default function Home() {
  const isUpdateScoresVisible = useSelector(
    (state: RootState) => state.modal.isUpdateScoresVisible
  );
  return (
    <div className={`min-h-screen flex flex-col `}>
      <div className={`${isUpdateScoresVisible ? 'opacity-50' : ''}`}>
      <Header></Header>
      
      <div className="h-full flex justify-around w-full">
        <SideBar></SideBar>
        <MainContainer></MainContainer>
      </div>
      </div>
        {isUpdateScoresVisible && <UpdateScores />}
    </div>
  );
}