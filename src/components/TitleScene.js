import React from 'react';
import MainMenu from "./MainMenu";
import Splash from "./Splash";

class TitleScene extends React.Component {

    render() {
        
        return (
            <>
                <Splash />
                <MainMenu isVisible />
            </>
        )
    }

}

export default TitleScene;