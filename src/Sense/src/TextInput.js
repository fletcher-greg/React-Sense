import React from "react";

export default function TextInput({ style, value, onChange }) {
  const combinedStyles = combineStyles(buttonStylesStater, style);

  return <input onChange={onChange} style={combinedStyles} value={value} />;
}

const buttonStylesStater = { borderRadius: "4px" };

function combineStyles(style1, style2, condition = !style2) {
  if (condition) {
    return Object.assign({}, style1);
  }

  return Object.assign({}, style1, style2);
}
