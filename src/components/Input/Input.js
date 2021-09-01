import React from "react";
import "./Input.scss";

const Input = (props) => {
  let cls = ["Input"];
  const inputType = props.type || "text";
  const htmlFor = `${inputType} - ${Math.random()}`;

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};

export default Input;
