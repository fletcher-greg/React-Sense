import React from "react";
import Flex from "./Flex";
import updateStyles from "./utils/updateStyles";
import "./stylesheets/ListItem.scss";
export default function ListItem(props) {
  const { style, onClick, children, className } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <Flex
      onClick={onClick}
      className={className ? className : "ListItem"}
      style={combinedStyles}
    >
      {children}
    </Flex>
  );
}

const basicStyles = {
  justifyContent: "flex-start",
  alignItems: "center",
  cursor: "pointer",
  flexDirection: "row",
  padding: "0px 16px",
  height: "56px"
};
