import React, { useContext, useState } from "react";

import { EventContext } from "../contexts/EventContext";

import "../styles/Canvas.css";

function Canvas(props) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [focused, setFocused] = useState(true);
  const eventEmitter = useContext(EventContext);

  function handleClick(e) {
    e.preventDefault();
    if (e.type === "click") eventEmitter.emit("LeftClick", e);
    if (e.type === "contextmenu") eventEmitter.emit("RightClick", e);
  }

  function handleKeyPress(e) {
    eventEmitter.emit("Key", e);
  }

  function handleMouseMove(e) {
    eventEmitter.emit("Mouse", e);
  }

  function focus() {
    setFocused(true);
  }

  return (
    <canvas
      tabIndex={focused ? 0 : 1}
      onKeyDown={handleKeyPress}
      onClick={handleClick}
      onContextMenu={handleClick}
      onMouseMove={handleMouseMove}
      //style={dimensions}
    ></canvas>
  );
}

export default Canvas;
