import React from "react";
import Button from "./Button";
import "./stylesheets/OutlineButton.scss";

export default function OutlineButton(props) {
  const { children, style, className, onClick } = props;
  const combinedStyles = updateStyles(outlineButtonStyles, style);
  return (
    <Button
      onClick={onClick}
      className={className ? className : "OutlineButton"}
      style={combinedStyles}
    >
      {children}
    </Button>
  );
}

const outlineButtonStyles = {
  border: "1px solid lightgrey",
  boxShadow: "none",
  color: "#6002ee",
  fontSize: ".9rem",
  fontWeight: "bold",
  letterSpacing: "1px",
  padding: ".5em 1em",
  borderRadius: "6px",
  textAlign: "center"
};

function updateStyles(style1, style2, condition = !style2) {
  if (condition) {
    return { ...style1 };
  }

  return { ...style1, ...style2 };
}
