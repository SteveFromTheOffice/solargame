import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/MainMenu.css";

export default class MainMenu extends React.Component {

    render() {

        return (
            <div className="MainMenu" style={{display: this.props.isVisible ? null : "none"}}>
                <h1>Solar</h1>
                <nav>
                    <Link to='/game'>Start</Link>
                    <Link to="/options">Options</Link>
                    <Link to="/">Exit</Link>
                </nav>
            </div>
        );
    }

}