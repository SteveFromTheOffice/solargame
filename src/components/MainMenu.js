import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sceneActions } from "../slices/SceneSlice";

import "../styles/MainMenu.css";

function MainMenu(props) {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.sceneManager.isVisible["MainMenu"]);
  const isInGame = useSelector((state) => state.sceneManager.isVisible["Canvas"]);

  function handleStartClick(e) {
    dispatch(sceneActions.setVisibility({ scene: "Canvas", visible: true }));
    dispatch(sceneActions.setVisibility({ scene: "UserInterface", visible: true }));
    dispatch(sceneActions.setVisibility({ scene: "MainMenu", visible: false }));
    dispatch(sceneActions.setVisibility({ scene: "Splash", visible: false }));
  }

  function handleOptionsClick(e) {
    dispatch(sceneActions.setVisibility({ scene: "Settings", visible: true }));
    dispatch(sceneActions.setVisibility({ scene: "MainMenu", visible: false }));
  }

  function handleExitClick(e) {
    dispatch(sceneActions.setVisibility({ scene: "Splash", visible: true }));
    dispatch(sceneActions.setVisibility({ scene: "MainMenu", visible: true }));
    dispatch(sceneActions.setVisibility({ scene: "Canvas", visible: false }));
    dispatch(sceneActions.setVisibility({ scene: "UserInterface", visible: false }));
  }

  return (
    <div
      className="MainMenu"
      style={{
        display: isVisible ? "flex" : "none",
      }}
    >
      <h1>Solar</h1>
      <nav>
        <button onClick={handleStartClick}>{isInGame ? "Resume" : "Start"}</button>
        <button onClick={handleOptionsClick}>Options</button>
        {isInGame && <button onClick={handleExitClick}>Exit</button>}
      </nav>
    </div>
  );
}

export default MainMenu;
