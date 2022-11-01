import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./SettingsSlice";
import sceneReducer from "./SceneSlice";

const Store = configureStore({
  reducer: { settings: settingsReducer, sceneManager: sceneReducer },
});

export default Store;
