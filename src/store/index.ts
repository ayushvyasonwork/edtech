// store.ts
"use client";
import { configureStore } from "@reduxjs/toolkit";
import scoresReducer from "./scoresSlice";
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    scores: scoresReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
