import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { EventContext } from "../contexts/EventContext";

import "../styles/MainMenu.css";

function MainMenu(props) {
  const [visible, setVisible] = useState(props.visible);
  const eventEmitter = useContext(EventContext);

  function toggleVisible() {
    setVisible((prevVisible) => {
      return !prevVisible;
    });
  }

  eventEmitter.on("ToggleMenu", (e) => {
    toggleVisible();
  });

  return (
    <div className="MainMenu" style={{ display: visible ? "flex" : "none" }}>
      <h1>Solar</h1>
      <nav>
        <Link to="/game">Start</Link>
        <Link to="/options">Options</Link>
        <Link to="/">Exit</Link>
      </nav>
    </div>
  );
}

export default MainMenu;
