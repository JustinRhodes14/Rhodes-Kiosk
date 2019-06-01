import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
  <nav className = {drawerClasses}>
    <ul>
      <li><a href = "/"> Visitor Centers</a></li>
      <li><a href = "/"> Articles</a></li>
      <li><a href = "/"> News Releases</a></li>
      <li><a href = "/"> Educational Info</a></li>
      <li><a href = "/"> Events</a></li>
      <li><a href = "/"> Alerts</a></li>
    </ul>
  </nav>
);
};

export default sideDrawer;
