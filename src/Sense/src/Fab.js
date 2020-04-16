import React from "react";

import Button from "./Button";
import updateStyles from "./utils/updateStyles";

export default function Fab(props) {
  const { children, style, className, onClick } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <Button onClick={onClick} className={className} style={combinedStyles}>
      {children}
    </Button>
  );
}

const basicStyles = {
  borderRadius: "50%",
  padding: "2em"
};
