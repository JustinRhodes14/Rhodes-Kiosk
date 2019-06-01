import React from "react";

const ParkInfo = props => (
      <div className = "park__info">
      {
        props.name && <p className = "park__key">Park Name: <span>{props.name}</span></p>
      }

      {
        props.fullName && <p className = "park__key">Full Name:<span>{props.fullName}</span></p>
    }

      {
        props.states && <p className = "park__key">State: <span>{props.states}</span></p>
      }

      {
        props.designation && <p className = "park__key">Designation:<span>{props.designation}</span></p>
      }

      {
        props.weatherInfo && <p className = "park__key">Weather: <span>{props.weatherInfo}</span></p>
      }

      {
        props.latLong && <p className = "park__key">Coordinates: <span>{props.latLong}</span></p>
      }

      {
        props.gDescription && <p className = "park__key">Description: <span>{props.gDescription}</span></p>
      }

      {
        props.error && <p className = "error__key"><span>{props.error}</span></p>
      }
      </div>
);

export default ParkInfo;
