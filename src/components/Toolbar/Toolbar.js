import React from "react";
import "./Toolbar.css";
import  DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
const Toolbar = props => (
  <header className = "toolbar">
    <nav className = "toolbar__navigation">
      <div>
        <DrawerToggleButton click = {props.drawerClickHandler}/>
      </div>
      <div className = "toolbar__logo"><a href = "/"> Menu </a></div>
      <div className = "spacer" />
    </nav>
  </header>
);

export default Toolbar;
