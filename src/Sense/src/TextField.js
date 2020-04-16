import React from "react";

import TextInput from "./TextInput";
import updateStyles from "./utils/updateStyles";
import "./stylesheets/TextField.scss";
export default function TextField(props) {
  const { style, onChange, value, className } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <TextInput
      className={className ? className : "TextField"}
      onChange={onChange}
      value={value}
      style={combinedStyles}
    />
  );
}

const basicStyles = {
  border: "none",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  borderBottom: "1px solid grey",
  outline: "none",
  padding: "20px 16px 6px",
};
