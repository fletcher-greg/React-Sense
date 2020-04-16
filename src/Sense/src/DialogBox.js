import React from "react";
import Flex from "./Flex";
import "./stylesheets/DialogBox.scss";
export default function DialogBox(props) {
  const { children, style, className } = props;
  const combinedStyles = updateStyles(dialogStyles, style);
  return (
    <Flex
      className={className ? className : "DialogBox"}
      style={combinedStyles}
    >
      {children}
    </Flex>
  );
}

const dialogStyles = {
  width: "240px",
  maxWidth: "240px",
  maxHeight: "360px",
  borderRadius: "4px",
  boxShadow:
    "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12)"
};

function updateStyles(style1, style2, condition = !style2) {
  if (condition) {
    return { ...style1 };
  }

  return { ...style1, ...style2 };
}
