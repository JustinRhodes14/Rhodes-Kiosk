import React from "react";
const Events = props => (
      <div className = "park__info">
      {
        props.evTitle && <p className = "park__key"> <b>Event:</b> <span>{props.evTitle}</span></p>
      }
      {
        props.location && <p className = "park__key"> <b>Location:</b> <span>{props.location}</span></p>
      }
      {
        props.contactPhone && <p className = "park__key"> <b>Contact Phone:</b> <span>{props.contactPhone}</span></p>
      }
      {
        props.start && <p className = "park__key"> <b>Event Start:</b> <span>{props.start}</span></p>
      }
      {
        props.end && <p className = "park__key"> <b>Event End:</b> <span>{props.end}</span></p>
      }
      {
        props.evDescription && <p className = "park__key"> <b>Event Description:</b> <span>{props.evDescription}</span></p>
      }
      {
        props.evError && <p className = "error__key">  <b><span>{props.evError}</span></b></p>
      }
      </div>
);
export default Events;
