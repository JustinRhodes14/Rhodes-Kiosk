import React from "react";
const Campgrounds = props => (
      <div className = "park__info">
      {
        props.cName && <p className = "park__key"> <b>Campground:</b> <span>{props.cName}</span></p>
      }
      {
        props.cInfo && <p className = "park__key"> <b>Directions & More Info:</b> <span><a href = {props.cInfo}> Click Here! </a></span></p>
      }
      {
        props.cDescription && <p className = "park__key"> <b>Description:</b> <span>{props.cDescription}</span></p>
      }
      {
        props.cName2 && <p className = "park__key"> <b>Campground:</b> <span>{props.cName2}</span></p>
      }
      {
        props.cInfo2 && <p className = "park__key"> <b>Directions & More Info:</b> <span><a href = {props.cInfo2}> Click Here! </a></span></p>
      }
      {
        props.cDescription2 && <p className = "park__key"> <b>Description:</b> <span>{props.cDescription2}</span></p>
      }
      {
        props.cError && <p className = "error__key"> <b><span>{props.cError}</span></b></p>
      }


      </div>
);
export default Campgrounds;
