import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventEmitter from "../EventEmitter";

import TitleScene from "./TitleScene";
import GameScene from "./GameScene";
import OptionsScene from "./OptionsScene";
import EventContext from "../contexts/EventContext";

const eventEmitter = new EventEmitter();
eventEmitter.on("ActionButtonPressed", (e) => {
  switch (e.name) {
    case "InventoryToggle":
      eventEmitter.emit("ToggleInventory");
      break;
    default:
      console.warn("Unknown ActionButtonPressed", e);
  }
});
eventEmitter.on("LeftClick", (e) => {
  console.log("M1");
});
eventEmitter.on("RightClick", (e) => {
  console.log("M2");
});

function App(props) {
  return (
    <EventContext value={eventEmitter}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<TitleScene /> />
          <Route path="/game" element=<GameScene /> />
          <Route path="/options" element=<OptionsScene /> />
        </Routes>
      </BrowserRouter>
    </EventContext>
  );
}

export default App;
