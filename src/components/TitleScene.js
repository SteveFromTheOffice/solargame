import React from "react";
import MainMenu from "./MainMenu";
import Splash from "./Splash";

function TitleScene(props) {
  return (
    <>
      <Splash />
      <MainMenu visible={true} />
    </>
  );
}

export default TitleScene;
