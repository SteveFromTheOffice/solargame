import React, { useContext } from "react";

import { EventContext } from "../contexts/EventContext";

import "../styles/Canvas.css";

function Canvas(props) {
  const eventEmitter = useContext(EventContext);

  function handleClick(e) {
    if (e.type === "click") {
      e.preventDefault();
      eventEmitter.emit("LeftClick", e);
    }

    if (e.type === "contextmenu") {
      e.preventDefault();
      eventEmitter.emit("RightClick", e);
    }
  }

  return <canvas onClick={handleClick} onContextMenu={handleClick}></canvas>;
}

export default Canvas;
// componentDidMount() {
//     window.addEventListener("resize", this.handleResize.bind(this));
// }

// componentWillUnmount() {
//     window.removeEventListener("resize", this.handleResize.bind(this));
// }

// handleResize(e) {

//     // Rescale the canvas pixels to match every time the client window changes.
//     this.setState({
//         width  : window.innerWidth,
//         height : window.innerHeight
//     });

// }
