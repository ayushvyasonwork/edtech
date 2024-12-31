import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUpdateScoresVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showUpdateScores: (state) => {
      state.isUpdateScoresVisible = true;
    },
    hideUpdateScores: (state) => {
      state.isUpdateScoresVisible = false;
    },
  },
});

export const { showUpdateScores, hideUpdateScores } = modalSlice.actions;
export default modalSlice.reducer;
