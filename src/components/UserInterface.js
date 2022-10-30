import React from "react";
import Inventory from "./Inventory";
import ActionButton from "./ActionButton";

import "../styles/UserInterface.css";

import InventoryIcon from "../images/InventoryIcon.png";

function UserInterface(props) {
  return (
    <>
      <Inventory />
      <div className="UserInterface">
        <ActionButton button="M1" name="mouse1" />
        <ActionButton button="M2" name="mouse2" />
        <div className="Vitals">Vitals</div>
        <ActionButton button="e" name="use" />
        <ActionButton button="i" name="InventoryToggle" icon={InventoryIcon} />
      </div>
    </>
  );
}

export default UserInterface;
