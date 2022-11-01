import React from "react";
import EventEmitter from "./EventEmitter";

import Splash from "./components/Splash";
import Canvas from "./components/Canvas";
import Settings from "./components/Settings";
import MainMenu from "./components/MainMenu";
import UserInterface from "./components/UserInterface";

import EventContext from "./contexts/EventContext";

import "./styles/App.css";

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

eventEmitter.on("Key", (e) => {
  switch (e.key) {
    case "w":
      console.log("W");
      break;
    case "a":
      console.log("A");
      break;
    case "s":
      console.log("S");
      break;
    case "d":
      console.log("D");
      break;
    case "e":
      console.log("E");
      break;
    case " ":
      console.log("Space");
      break;
    case "Escape":
      eventEmitter.emit("ToggleMenu");
      break;
    default:
      console.warn("Unknown key sent:", e);
  }
});

eventEmitter.on("Mouse", (e) => {
  console.log(e.clientX, e.clientY);
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
      <Canvas />
      <UserInterface />
      <Splash />
      <MainMenu />
      <Settings />
    </EventContext>
  );
}

export default App;
