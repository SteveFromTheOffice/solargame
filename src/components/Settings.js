import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sceneActions } from "../slices/SceneSlice";
import { settingsActions } from "../slices/SettingsSlice";

import "../styles/Settings.css";

function Settings(props) {
  const dispatch = useDispatch();
  const frameRate = useSelector((state) => state.settings.frameRate);

  const isFocused = useSelector((state) => state.sceneManager.isFocused);
  const isVisible = useSelector((state) => state.sceneManager.isVisible["Settings"]);

  function handleChange(e) {
    dispatch(settingsActions.setFrameRate(e.target.value));
  }

  function handleBack(e) {
    dispatch(sceneActions.setVisibility({ scene: "MainMenu", visible: true }));
    dispatch(sceneActions.setVisibility({ scene: "Settings", visible: false }));
    dispatch(sceneActions.setFocus("MainMenu"));
  }

  return (
    <div
      className="Settings"
      style={{
        display: isVisible ? "flex" : "none",
        tabIndex: isFocused ? 0 : -1,
      }}
    >
      <h1>Options</h1>
      <form>
        <div>
          <label>Frame Rate</label>
          <input onChange={handleChange} type="range" min={1} max={240} value={frameRate}></input>
          <input onChange={handleChange} type="number" value={frameRate}></input>
        </div>
      </form>
      <div className="grow"></div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Settings;
