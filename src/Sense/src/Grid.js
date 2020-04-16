import React from "react";
import View from "./View";

export default function Grid(props) {
  const { children, style } = props;
  const combinedStyles = updateStyles(gridStyles, style);
  return <View style={combinedStyles}>{children}</View>;
}

const gridStyles = {
  display: "grid"
};

function updateStyles(style1, style2, condition = !style2) {
  if (condition) {
    return { ...style1 };
  }

  return { ...style1, ...style2 };
}
