import React from "react";
import View from "./View";

export default function Flex(props) {
  const { children, style, className, onClick } = props;
  const combinedStyles = updateStyles(flexStyles, style);
  return (
    <View
      onClick={onClick}
      className={className ? className : "Flex"}
      style={combinedStyles}
    >
      {children}
    </View>
  );
}

const flexStyles = {
  display: "flex",
  flexDirection: "column"
};

function updateStyles(style1, style2, condition = !style2) {
  if (condition) {
    return { ...style1 };
  }

  return { ...style1, ...style2 };
}
