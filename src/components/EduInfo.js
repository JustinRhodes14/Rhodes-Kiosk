import React from "react";
const EduInfo = props => (
      <div className = "park__info">
      {
        props.objective && <p className = "park__key"> <b>Objective:</b> <span>{props.objective}</span></p>
      }
      {
        props.subject && <p className = "park__key"> <b>Subject:</b> <span>{props.subject}</span></p>
      }
      {
        props.vidTitle && <p className = "park__key"> <b>Video Title:</b> <span>{props.vidTitle}</span></p>
      }
      {
        props.edUrl && <p className = "park__key"> <b>Watch & Learn:</b> <span><a href = {props.edUrl}> Click Here! </a></span></p>
      }
      {
        props.edError && <p className = "error__key">  <b><span>{props.edError}</span></b></p>
      }
      </div>
);
export default EduInfo;
