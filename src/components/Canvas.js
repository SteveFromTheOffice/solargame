import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sceneActions } from "../slices/SceneSlice";

import { EventContext } from "../contexts/EventContext";

import "../styles/Canvas.css";

function Canvas(props) {
  const dispatch = useDispatch();
  //const isFocused = useSelector((state) => state.sceneManager.focusTarget == "Canvas");
  const isVisible = useSelector((state) => state.sceneManager.isVisible["Canvas"]);
  const eventEmitter = useContext(EventContext);

  function handleBlur(e) {
    e.target.focus();
    console.log(e);
  }

  function handleClick(e) {
    e.preventDefault();

    if (e.type === "click") eventEmitter.emit("LeftClick", e);
    if (e.type === "contextmenu") eventEmitter.emit("RightClick", e);
  }

  function handleKeyPress(e) {
    if (e.key == "Escape") {
      dispatch(sceneActions.setVisibility({ scene: "MainMenu", visible: true }));
      return;
    }
    eventEmitter.emit("Key", e);
  }

  function handleMouseMove(e) {
    eventEmitter.emit("Mouse", e);
  }

  return (
    <canvas
      autofocus
      tabIndex={0}
      onBlur={handleBlur}
      onKeyDown={handleKeyPress}
      onClick={handleClick}
      onContextMenu={handleClick}
      onMouseMove={handleMouseMove}
      style={{ display: isVisible ? "flex" : "none" }}
    ></canvas>
  );
}

export default Canvas;
