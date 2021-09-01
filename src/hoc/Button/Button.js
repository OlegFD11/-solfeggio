import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`Button ${props.type}`}
      disabled={props.disabled}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
