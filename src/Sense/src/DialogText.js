import React from "react";

import View from "./View";
import updateStyles from "./utils/updateStyles";

export default function DialogText(props) {
  const { children, onClick, style } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <View onClick={onClick} style={combinedStyles}>
      {children}
    </View>
  );
}

const basicStyles = {
  padding: "0px 24px 20px 24px",
  fontSize: "1rem",
  lineHeight: "1rem",
  fontWeight: 400,
  flexGrow: 1,
  overFlow: "auto",
  letterSpacing: ".03125em",
  textAlign: "left"
};
