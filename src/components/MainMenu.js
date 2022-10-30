import React from "react";
import { Link } from "react-router-dom";

import "../styles/MainMenu.css";

function MainMenu(props) {
  return (
    <div
      className="MainMenu"
      style={{ display: props.isVisible ? null : "none" }}
    >
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
