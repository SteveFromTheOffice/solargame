import React, { useState, useContext } from "react";
import Item from "./Item";

import { EventContext } from "../contexts/EventContext";

import "../styles/Inventory.css";

function Inventory(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const eventEmitter = useContext(EventContext);

  function close() {
    setVisible(false);
  }

  function handleMouseDown(e) {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    setPosition((oldPosition) => {
      return {
        x: oldPosition.x + e.movementX,
        y: oldPosition.y + e.movementY,
      };
    });
  }

  function handleMouseUp(e) {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  // function open() {
  //   setVisible(true);
  // }

  function toggleVisibility() {
    setVisible(!visible);
  }

  eventEmitter.on("ToggleInventory", (e) => {
    toggleVisibility();
  });

  return (
    <div
      onMouseDown={handleMouseDown}
      className="Inventory"
      style={{
        left: position.x,
        top: position.y,
        display: visible ? "revert" : "none",
      }}
    >
      <div className="header">
        <div>Inventory</div>
        <div></div>
        <button className="close" onClick={close}>
          X
        </button>
      </div>
      <div className="inner">
        <Item />
      </div>
    </div>
  );
}

export default Inventory;
