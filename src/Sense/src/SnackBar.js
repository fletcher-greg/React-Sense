import React from "react";

import "./stylesheets/SnackBar.scss";
import updateStyles from "./utils/updateStyles";
import Button from "./Button";
import Flex from "./Flex";
export default function SnackBar(props) {
  const { children, className, style, btnText, onClick } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <Flex className={className ? className : "SnackBar"} style={combinedStyles}>
      {children}
      <Button onClick={onClick}>{btnText}</Button>
    </Flex>
  );
}
const basicStyles = {
  position: "fixed",
  color: "#ffffffde",
  background: "#333333",
  padding: "1em",
  minWidth: 300,
  flexDirection: "row",
  justifyContent: "space-between",
  borderRadius: "4px",
  boxShadow:
    "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)",
};
