import React from "react";
const VisitorCenters = props => (
      <div className = "park__info">
      {
        props.vName && <p className = "park__key"> <b>Visitor Center:</b> <span>{props.vName}</span></p>
      }
      {
        props.vDescription && <p className = "park__key"> <b>Description:</b> <span>{props.vDescription}</span></p>
      }
      {
        props.vUrl && <p className = "park__key"> <b>More Info:</b> <span><a href = {props.vUrl}> Click Here! </a></span></p>
      }

      {
        props.vName2 && <p className = "park__key"> <b>Visitor Center:</b> <span>{props.vName2}</span></p>
      }
      {
        props.vDescription2 && <p className = "park__key"> <b>Description:</b> <span>{props.vDescription2}</span></p>
      }
      {
        props.vUrl2 && <p className = "park__key"> <b>More Info:</b> <span><a href = {props.vUrl2}> Click Here! </a></span></p>
      }
      {
        props.vError && <p className = "error__key"> <b><span>{props.vError}</span></b></p>
      }
      </div>
);
export default VisitorCenters;
