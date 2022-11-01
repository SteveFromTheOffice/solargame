import React from "react";
import { useSelector } from "react-redux";

import Inventory from "./Inventory";
import ActionButton from "./ActionButton";

import "../styles/UserInterface.css";
import InventoryIcon from "../images/InventoryIcon.png";

function UserInterface(props) {
  const isVisible = useSelector((state) => state.sceneManager.isVisible["UserInterface"]);

  return (
    <div className="UserInterface" style={{ display: isVisible ? "flex" : "none" }}>
      <Inventory />
      <ActionButton button="M1" name="mouse1" />
      <ActionButton button="M2" name="mouse2" />
      <ActionButton button="e" name="use" />
      <div className="Vitals">Vitals</div>
      <ActionButton button="i" name="InventoryToggle" icon={InventoryIcon} />
    </div>
  );
}

export default UserInterface;
