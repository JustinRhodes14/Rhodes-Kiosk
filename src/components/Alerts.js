import React from "react";
const Alerts = props => (
      <div className = "park__info">
      {
        props.aTitle && <p className = "park__key"> <b>Alert:</b> <span>{props.aTitle}</span></p>
      }
      {
        props.category && <p className = "park__key"> <b>Category:</b> <span>{props.category}</span></p>
      }
      {
        props.aDescription && <p className = "park__key"> <b>Description:</b> <span>{props.aDescription}</span></p>
      }
      {
        props.aTitle2 && <p className = "park__key"> <b>Alert:</b> <span>{props.aTitle2}</span></p>
      }
      {
        props.category2 && <p className = "park__key"> <b>Category:</b> <span>{props.category2}</span></p>
      }
      {
        props.aDescription2 && <p className = "park__key"> <b>Description:</b> <span>{props.aDescription2}</span></p>
      }
      {
        props.aError && <p className = "error__key">  <b><span>{props.aError}</span></b></p>
      }

      </div>
);
export default Alerts;
