import React, { useState, useContext } from "react";
import Item from "./Item";

import { EventContext } from "../contexts/EventContext";

import "../styles/Inventory.css";

function Inventory(props) {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const eventEmitter = useContext(EventContext);

  function close() {
    setVisible(false);
  }

  function handleMouseDown(e) {
    setDragging(true);
  }

  function handleMouseMove(e) {
    if (!dragging) return;

    setPosition((oldPosition) => {
      return {
        x: oldPosition.x + e.movementX,
        y: oldPosition.y + e.movementY,
      };
    });
  }

  function handleMouseUp(e) {
    setDragging(false);
  }

  function open() {
    setVisible(true);
  }

  function toggleVisibility() {
    setVisible(!visible);
  }

  eventEmitter.on("ToggleInventory", (e) => {
    toggleVisibility();
  });

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
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
