import React from "react";

import DialogBox from "./DialogBox";
// import updateStyles from "./utils/updateStyles";

export default function DialogList(props) {
  const { children, style, onClick } = props;

  // const combinedStyles = updateStyles(basicStyles, style);
  return (
    <DialogBox onClick={onClick} style={style}>
      {children}
    </DialogBox>
  );
}
