import React from "react";
import "./CustomInput.scss";

export default function CustomInput(props) {
  const { label, error, type, ref, name } = props;
  return (
    <div className="input--wrapper">
      <label>{label}</label>
      <input
        className="input--box"
        ref={props.register}
        placeholder={""}
        type={type}
        name={name}
      />
      <div className="error--wrapper">{error} </div>
    </div>
  );
}
