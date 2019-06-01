import React from "react";

const Form = props => (
  <form onSubmit = {props.getInfo}>
    <input type = "text" name ="stateCode" placeholder = "State"/>
    <input type = "text" name ="parkCode" placeholder = "Park Code"/>
    <button> Get Parks </button>
  </form>
);
export default Form;
