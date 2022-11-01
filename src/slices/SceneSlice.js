import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  focusTarget: null,

  isVisible: {
    Canvas: false,
    MainMenu: true,
    UserInterface: false,
    Settings: false,
    Splash: true,
  },
};

const SceneSlice = createSlice({
  name: "Settings",
  initialState: initialState,
  reducers: {
    setFocus: (state, action) => {
      state.focusTarget = action.payload;
    },
    setVisibility: (state, action) => {
      state.isVisible[action.payload.scene] = action.payload.visible;
    },
  },
});

export default SceneSlice.reducer;
export const sceneActions = SceneSlice.actions;
