import React from "react";
import "./stylesheets/WideButton.scss";
import View from "./View";

import Button from "./Button";

export default function WideButton(props) {
  const { children } = props;

  return (
    <View style={{ display: "flex" }}>
      <Button className="WideButton" {...props}>
        {children}
      </Button>
    </View>
  );
}

const buttonStylesStater = {};

function combineStyles(style1, style2, condition = !style2) {
  if (condition) {
    return Object.assign({}, ...style1);
  }

  return Object.assign({}, ...[...style1, style2]);
}
