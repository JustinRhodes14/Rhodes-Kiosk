import React from "react";
import "./Backdrop.css";
const backdrop = props => (
  //creates a backdrop when the side drawer is active
  <div className = "backdrop" onClick = {props.click} />
);

export default backdrop;
