import React from "react";
import "./stylesheets/Button.scss";
export default function Button(props) {
  const { disabled, children, onClick, style, className } = props;
  const buttonStyles = [stylesStarter.button];

  if (disabled) {
    buttonStyles.push({ backgroundColor: "red" });
  } else {
  }
  const textStyles = [stylesStarter.text];
  let newStyles = combineStyles(buttonStyles, style);
  return (
    <button
      className={className ? className : "Button"}
      disabled={disabled}
      style={newStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const stylesStarter = {
  button: {
    borderRadius: 2,
    color: "white",
    outline: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, .3)",
    border: "none"
  },
  text: {}
};

function combineStyles(style1, style2) {
  if (!style2) {
    return Object.assign({}, ...style1);
  }

  return Object.assign({}, ...[...style1, style2]);
}
