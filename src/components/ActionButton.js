import React from 'react';

import "../styles/ActionButton.css";

export default class ActionButton extends React.Component {
  
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div onClick={this.props.onClick} className="ActionButton">
                <label>{this.props.button.toUpperCase()}</label>
            </div>
        );
    }

}