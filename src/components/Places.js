import React from "react";
const Places = props => (
      <div className = "park__info">
      {
        props.pTitle && <p className = "park__key"> <b>Name:</b> <span>{props.pTitle}</span></p>
      }
      {
        props.pDescription && <p className = "park__key"> <b>Description:</b> <span>{props.pDescription}</span></p>
      }
      {
        props.pUrl && <p className = "park__key"> <b>More Info:</b> <span><a href = {props.pUrl}> Click Here! </a></span></p>
      }
      {
        props.pTitle2 && <p className = "park__key"> <b>Name:</b> <span>{props.pTitle2}</span></p>
      }
      {
        props.pDescription2 && <p className = "park__key"> <b>Description:</b> <span>{props.pDescription2}</span></p>
      }
      {
        props.pUrl2 && <p className = "park__key"> <b>More Info:</b> <span><a href = {props.pUrl2}> Click Here! </a></span></p>
      }
      {
        props.pError && <p className = "error__key"> <b><span>{props.pError}</span></b></p>
      }


      </div>
);
export default Places;
