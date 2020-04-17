import React from "react";
import updateStyles from "./utils/updateStyles";

export default function Label(props) {
  const { children, style, htmlFor, className, dataAttr } = props;

  const combineStyles = updateStyles(basicStyles, style);

  return (
    <label
      data={dataAttr}
      style={combineStyles}
      className={className}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

const basicStyles = {};
