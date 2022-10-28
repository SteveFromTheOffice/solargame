import React from 'react';
import Vitals from "./Vitals";
import ActionButton from "./ActionButton";

import "../styles/UserInterface.css";

export default class UserInterface extends React.Component {

    toggleInventory() {
        console.log("Inventory toggled!");
    }

    render() {

        return (
            <div className="UserInterface">
                <ActionButton button="M1" />
                <ActionButton button="M2" />
                <div className="Vitals">
                    Vitals
                </div>
                <ActionButton button="e" />
                <ActionButton button="i" onClick={this.toggleInventory} />
            </div>
            
        );
    }

}