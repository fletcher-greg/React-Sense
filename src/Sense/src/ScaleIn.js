import React from "react";
import View from "./View";
import updateStyles from "./utils/updateStyles";
import "./stylesheets/ScaleIn.scss";
export default function ScaleIn(props) {
  const { children, style, className, scaleRef } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <View
      scaleRef={scaleRef}
      className={className ? className : "ScaleIn"}
      style={combinedStyles}
    >
      {children}
    </View>
  );
}

const basicStyles = {
  height: "100%",
  width: "100%",
  minHeight: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: "absolute",
  overflow: "scroll",
};
