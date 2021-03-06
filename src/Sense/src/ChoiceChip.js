import React from "react";
import "./stylesheets/ChoiceChip.scss";
import Flex from "./Flex";
import updateStyles from "./utils/updateStyles";

export default function ChoiceChip(props) {
  const { style, children, className } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <Flex
      className={className ? className : "ChoiceChip"}
      style={combinedStyles}
    >
      {children}
    </Flex>
  );
}

const basicStyles = {
  minWidth: "maxContent",
  flexDirection: "row",
  display: "inline-flex",
};
