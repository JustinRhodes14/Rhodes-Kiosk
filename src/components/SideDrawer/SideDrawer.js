import React from "react";
import { Link } from "react-scroll";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    //Using link class which allows for the press of each button in the side drawer to take users to the desired panel

  <nav className = {drawerClasses}>
    <ul>
    <li><Link
  activeClass="active"
  to= "col form-container"
  spy={true}
  smooth={true}
  offset={-70}
  duration= {100}>
Park Info </Link></li>
    <li><Link
  activeClass="active"
  to= "col form-containerVisitor"
  spy={true}
  smooth={true}
  offset={-70}
  duration= {100}>
Visitor Centers </Link></li>
<li><Link
activeClass="active"
to= "col form-containerArticles"
spy={true}
smooth={true}
offset={-70}
duration= {100}>
Articles </Link></li>
<li><Link
activeClass="active"
to= "col form-containerNews"
spy={true}
smooth={true}
offset={-70}
duration= {100}>
News Releases </Link></li>
<li><Link
activeClass="active"
to= "col form-containerEducation"
spy={true}
smooth={true}
offset={-70}
duration= {100}>
Educational Info </Link></li>
<li><Link
activeClass="active"
to= "col form-containerEvents"
spy={true}
smooth={true}
offset={-70}
duration= {100}>
Events </Link></li>
<li><Link
activeClass="active"
to= "col form-containerAlerts"
spy={true}
smooth={true}
offset={-70}
duration= {100}>
Alerts </Link></li>
<li><Link
activeClass="active"
to= "col form-containerCGrounds"
spy={true}
smooth={true}
offset={-70}
duration= {100}>
Campgrounds </Link></li>
<li><Link
activeClass="active"
to= "col form-containerPlaces"
spy={true}
smooth={true}
offset={-70}
duration= {100}>
Places </Link></li>
<li><Link
activeClass="active"
to= "col form-containerPeople"
spy={true}
smooth={true}
offset={-70}
duration= {100}>
People </Link></li>
    </ul>
  </nav>
);
};

export default sideDrawer;
