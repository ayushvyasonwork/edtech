// store/scoresSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScoresState {
  rank: number;
  percentile: number;
  currentScore: number;
}

const initialState: ScoresState = {
  rank: 0,            // default fallback
  percentile: 30,
  currentScore: 10,
};

const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    updateScores: (
      state,
      action: PayloadAction<{ rank: number; percentile: number; currentScore: number }>
    ) => {
      state.rank = action.payload.rank;
      state.percentile = action.payload.percentile;
      state.currentScore = action.payload.currentScore;
    },
  },
});

export const { updateScores } = scoresSlice.actions;
export default scoresSlice.reducer;
