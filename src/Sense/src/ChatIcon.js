import React from "react";
import Flex from "./Flex";
import Text from "./Text";
import { ChatIconSvg } from "./smallComps/svgs";
import updateStyles from "./utils/updateStyles";

export default function ChatIcon(props) {
  const { text, style } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <Flex style={combinedStyles}>
      <ChatIconSvg width={24} fill="white" height="24" />
      <Text>{text}</Text>
    </Flex>
  );
}

const basicStyles = {
  position: "fixed",
  bottom: 0,
  right: 0,
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
};
