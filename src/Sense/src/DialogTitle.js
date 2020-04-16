import React from "react";
import Title from "./Title";

export default function CardTitle(props) {
  const { children, style } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return <Title style={combinedStyles}>{children}</Title>;
}

const basicStyles = {
  padding: "20px 24px 9px",
  textAlign: "left"
};

function updateStyles(style1, style2, condition = !style2) {
  if (condition) {
    return { ...style1 };
  }

  return { ...style1, ...style2 };
}
