import React from "react";
import "./stylesheets/Appear.scss";
import updateStyles from "./utils/updateStyles";
import View from "./View";
export default function Appear(props) {
  const { children, style, className } = props;

  const combinedStyles = updateStyles(style);

  return (
    <View className={className ? className : "Appear"} style={combinedStyles}>
      {children}
    </View>
  );
}
