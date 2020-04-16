import React from "react";

export default function TextInput({ style, value, onChange, className }) {
  const combinedStyles = combineStyles(basicStyles, style);

  return (
    <input
      className={className}
      onChange={onChange}
      style={combinedStyles}
      value={value}
    />
  );
}

const basicStyles = {};

function combineStyles(style1, style2, condition = !style2) {
  if (condition) {
    return Object.assign({}, style1);
  }

  return Object.assign({}, style1, style2);
}
