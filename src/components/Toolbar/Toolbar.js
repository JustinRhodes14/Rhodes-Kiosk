import React from "react";
import "./Toolbar.css";
import {Link} from "react-scroll";
import  DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
const Toolbar = props => (
  //used for the home button at the top of the screen
  <header className = "toolbar">
    <nav className = "toolbar__navigation">
      <div>
        <DrawerToggleButton click = {props.drawerClickHandler}/>
      </div>
      <Link
    activeClass="toolbar__logo"
    to="toolbar"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
/>
      <div className = "toolbar__logo"><a href = "#"> Home </a></div>
      <div className = "spacer" />
    </nav>
  </header>
);

export default Toolbar;
