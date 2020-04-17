import React from "react";

export default function TextInput({
  style,
  value,
  onChange,
  className,
  placeholder,
  maxLength,
  required,
  type,
}) {
  const combinedStyles = combineStyles(basicStyles, style);

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      style={combinedStyles}
      value={value}
      maxLength={maxLength}
      required={required}
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
