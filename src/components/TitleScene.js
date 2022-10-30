import React from "react";
import MainMenu from "./MainMenu";
import Splash from "./Splash";

function TitleScene(props) {
  return (
    <>
      <Splash />
      <MainMenu isVisible />
    </>
  );
}

export default TitleScene;
