import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./SettingsSlice";
import sceneReducer from "./SceneSlice";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const Store = configureStore({
  reducer: { settings: settingsReducer, sceneManager: sceneReducer },
});

export default Store;
