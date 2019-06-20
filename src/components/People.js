import React from "react";
const People = props => (
      <div className = "park__info">
      {
        props.pplName && <p className = "park__key"> <b>Name:</b> <span>{props.pplName}</span></p>
      }
      {
        props.pplDescription && <p className = "park__key"> <b>Description:</b> <span>{props.pplDescription}</span></p>
      }
      {
        props.pplUrl && <p className = "park__key"> <b>More Info:</b> <span><a href = {props.pplUrl}> Click Here! </a></span></p>
      }
      {
        props.pName2 && <p className = "park__key"> <b>Name:</b> <span>{props.pName2}</span></p>
      }
      {
        props.pDescription2 && <p className = "park__key"> <b>Description:</b> <span>{props.pDescription2}</span></p>
      }
      {
        props.pUrl2 && <p className = "park__key"> <b>More Info:</b> <span><a href = {props.pUrl2}> Click Here! </a></span></p>
      }
      {
        props.pplError && <p className = "error__key"> <b><span>{props.pplError}</span></b></p>
      }


      </div>
);
export default People;
