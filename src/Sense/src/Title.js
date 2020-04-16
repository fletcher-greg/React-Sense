import React from "react";

export default function Title(props) {
  const { children, style } = props;
  const combinedStyles = updateStyles(titleBasicStyles, style);
  return <h1 style={combinedStyles}>{children}</h1>;
}

const titleBasicStyles = {
  fontSize: "1.25rem",
  lineHeight: "2rem",
  fontWeight: 500,
  margin: 0
};

function updateStyles(style1, style2, condition = !style2) {
  if (condition) {
    return { ...style1 };
  }

  return { ...style1, ...style2 };
}
