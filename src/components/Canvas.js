import React from 'react';

import '../styles/Canvas.css';

export default class Canvas extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            height : 100,
            width  : 100
        };

    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize.bind(this));
    }

    handleClick(e) {

        if(e.type == "click") {
            this.handleLeftClick(e);
        }

        if(e.type == "contextmenu") {
            e.preventDefault();
            this.handleRightClick(e);
        }
    }

    handleLeftClick(e) {
        console.log("M1");
    }

    handleRightClick(e) {
        console.log("M2");
    }

    handleResize(e) {
        
        // Rescale the canvas pixels to match every time the client window changes.
        this.setState({
            width  : window.innerWidth,
            height : window.innerHeight
        });

    }
  
    render() {

        return (
            <canvas onClick={this.handleClick.bind(this)} onContextMenu={this.handleClick.bind(this)}></canvas>
        );
    }

}