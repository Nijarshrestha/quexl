import React from "react";
import "./CustomButton.scss";

export default function CustomButton(props) {
  const { text, disable } = props;
  return (
    <button className="btn--wrapper" disabled={disable} onClick={props.onClick}>
      {text}
    </button>
  );
}
