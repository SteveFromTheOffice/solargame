import React from "react";

import Canvas from "./Canvas";
import MainMenu from "./MainMenu";
import UserInterface from "./UserInterface";

import "../styles/GameScene.css";

function GameScene(props) {
  return (
    <div className="GameScene">
      <Canvas />
      <UserInterface />
      <MainMenu visible={false} />
    </div>
  );
}

export default GameScene;
