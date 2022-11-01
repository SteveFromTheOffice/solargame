import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  frameRate: 30,
};

const settingsSlice = createSlice({
  name: "Settings",
  initialState: initialState,
  reducers: {
    setFrameRate: (state, action) => {
      state.frameRate = action.payload;
    },
  },
});

export default settingsSlice.reducer;
export const settingsActions = settingsSlice.actions;
