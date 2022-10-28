import React from 'react';

import Canvas from "./Canvas";
import MainMenu from "./MainMenu";
import UserInterface from "./UserInterface";

import "../styles/GameScene.css";

export default class GameScene extends React.Component {

  
    render() {

        return (
            <div className="GameScene">
                <Canvas />
                <UserInterface />
                <MainMenu isVisible={false} />
            </div>
        );
    }

}