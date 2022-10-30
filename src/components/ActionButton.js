import React, { useContext } from "react";

import { EventContext } from "../contexts/EventContext";

import "../styles/ActionButton.css";

function ActionButton(props) {
  const eventEmitter = useContext(EventContext);

  function handleClick(e) {
    eventEmitter.emit("ActionButtonPressed", { name: props.name });
  }

  return (
    <div
      onClick={handleClick}
      className="ActionButton"
      style={{ backgroundImage: `url(${props.icon})` }}
    >
      <label>{props.button.toUpperCase()}</label>
    </div>
  );
}

export default ActionButton;
