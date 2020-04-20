import React from "react";
import "./stylesheets/WideButton.scss";
import View from "./View";

import Button from "./Button";
import updateStyles from "./utils/updateStyles";

export default function WideButton(props) {
  const { children, style, ...rest } = props;
  const combinedStyles = updateStyles(basicStyles, style);

  return (
    <View style={{ display: "flex" }}>
      <Button style={combinedStyles} className="WideButton" {...rest}>
        {children}
      </Button>
    </View>
  );
}

const basicStyles = {
  "--color": "rgb(240, 240, 240)",
};
