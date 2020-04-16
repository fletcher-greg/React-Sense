import React from "react";

import updateStyles from "./utils/updateStyles";
import Flex from "./Flex";
export default function List(props) {
  const { children, style } = props;
  const combinedStyles = updateStyles(basicStyles, style);

  return <Flex style={combinedStyles}>{children}</Flex>;
}

const basicStyles = {
  padding: "0px 8px 9px 8px"
};
