import React from "react";
const NewsReleases = props => (
      <div className = "park__info">
      {
        props.abstract && <p className = "park__key"> <b>Abstract:</b> <span>{props.abstract}</span></p>
      }
      {
        props.nUrl && <p className = "park__key"> <b>Read More:</b> <span><a href = {props.nUrl}> Click Here! </a></span></p>
      }
      {
        props.nDate && <p className = "park__key"> <b>Release Date:</b> <span>{props.nDate}</span></p>
      }

      {
        props.abstract2 && <p className = "park__key"> <b>Abstract:</b> <span>{props.abstract2}</span></p>
      }
      {
        props.nUrl2 && <p className = "park__key"> <b>Read More:</b> <span><a href = {props.nUrl2}> Click Here! </a></span></p>
      }
      {
        props.nDate2 && <p className = "park__key"> <b>Release Date:</b> <span>{props.nDate2}</span></p>
      }
      {
        props.nError && <p className = "error__key">  <b><span>{props.nError}</span></b></p>
      }
      </div>
);
export default NewsReleases;
