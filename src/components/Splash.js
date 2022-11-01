import React from "react";
import { useSelector } from "react-redux";

import "../styles/Splash.css";

function Splash(props) {
  const isVisible = useSelector((state) => state.sceneManager.isVisible["Splash"]);

  return (
    <div className="Splash" style={{ display: isVisible ? "flex" : "none" }}>
      development build
    </div>
  );
}

export default Splash;
