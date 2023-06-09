import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.name}</label>
      <input type="text" id={props.id} />
    </div>
  );
};

export default Input;
