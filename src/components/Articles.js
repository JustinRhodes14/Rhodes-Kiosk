import React from "react";
const Articles = props => (
      <div className = "park__info">
      {
        props.arTitle && <p className = "park__key"> <b>Article:</b> <span>{props.arTitle}</span></p>
      }
      {
        props.arUrl && <p className = "park__key"> <b>Read More:</b> <span><a href = {props.arUrl}> Click Here! </a></span></p>
      }
      {
        props.arTitle2 && <p className = "park__key"> <b>Article:</b> <span>{props.arTitle2}</span></p>
      }
      {
        props.arUrl2 && <p className = "park__key"> <b>Read More:</b> <span><a href = {props.arUrl2}> Click Here! </a></span></p>
      }
      {
        props.arTitle3 && <p className = "park__key"> <b>Article:</b> <span>{props.arTitle3}</span></p>
      }
      {
        props.arUrl3 && <p className = "park__key"> <b>Read More:</b> <span><a href = {props.arUrl3}> Click Here! </a></span></p>
      }
      {
        props.arError && <p className = "error__key">  <b><span>{props.arError}</span></b></p>
      }
      </div>
);
export default Articles;
