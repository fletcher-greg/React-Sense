import React from "react";
import updateStyles from "./utils/updateStyles";
import Flex from "./Flex";
import "./stylesheets/TopMenu.scss";
export default function TopMenu(props) {
  const { children, onClick, style, className } = props;
  const combineStyles = updateStyles(basicStyles, style);
  return (
    <Flex
      style={combineStyles}
      onClick={onClick}
      className={className ? className : "TopMenu"}
    >
      {children}
    </Flex>
  );
}

const basicStyles = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 10px",
};
