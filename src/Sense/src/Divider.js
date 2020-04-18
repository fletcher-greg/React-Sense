import React from "react";
import "./stylesheets/Divider.scss";
import View from "./View";
import updateStyles from "./utils/updateStyles";
export default function Divider(props) {
  const { className, style } = props;
  const combinedStyles = updateStyles(style);

  return (
    <View
      className={className ? className : "Divider"}
      style={combinedStyles}
    />
  );
}
