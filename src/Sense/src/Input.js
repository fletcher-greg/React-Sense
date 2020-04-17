import React from "react";
import updateStyles from "./utils/updateStyles";

export default function Input(props) {
  const {
    style,
    className,
    value,
    onChange,
    type,
    placeholder,
    maxLength,
    required,
    range,
    min,
    max,
    step,
  } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <input
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
      className={className ? className : "Input"}
      value={value}
      onChange={onChange}
      type={type}
      style={combinedStyles}
      range={range}
      min={min}
      max={max}
      step={step}
    />
  );
}
// TODO: add basic styles
const basicStyles = {};
