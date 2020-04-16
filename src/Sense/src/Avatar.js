import React from "react";
import updateStyles from "./utils/updateStyles";

export default function Avatar(props) {
  const { children, style, onClick } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <span onClick={onClick} style={combinedStyles}>
      {children}
    </span>
  );
}

const basicStyles = {
  borderRadius: "50%",
  height: "40px",
  width: "40px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "16px"
};
