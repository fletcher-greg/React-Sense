import React from "react";
import Flex from "./Flex";
import updateStyles from "./utils/updateStyles";
import "./stylesheets/Scrim.scss";
export default function Scrim(props) {
  const { children, style, className } = props;

  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <Flex className={className ? className : "Scrim"} style={combinedStyles}>
      {children}
    </Flex>
  );
}

const basicStyles = {
  position: "fixed",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, .4)"
};
