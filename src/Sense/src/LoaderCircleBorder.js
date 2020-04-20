import React from "react";
import View from "./View";

export default function LoaderCircleBorder(props) {
  const { style, className } = props;

  return (
    <View
      style={combinedStyles}
      className={className ? className : "LoaderCircleBorder"}
    />
  );
}
