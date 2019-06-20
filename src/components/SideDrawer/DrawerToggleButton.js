import React from "react";
import "./DrawerToggleButton.css";
const drawerToggleButton = props => (
  //3 bars that toggle the side drawer
  <button className = "toggle-button" onClick = {props.click}>
    <div className = "toggle-button__line"/>
    <div className = "toggle-button__line"/>
    <div className = "toggle-button__line"/>
  </button>
);

export default drawerToggleButton;
