import React from "react";
import Flex from "./Flex";
import Button from "./Button";
import "./stylesheets/Banner.scss";
import updateStyles from "./utils/updateStyles";

export default function Banner(props) {
  const { children, className, style, btnText, onClick } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <Flex className={className ? className : "Banner"} style={combinedStyles}>
      {children}
      <Button
        style={{ "--bg": "none", color: "#6002ee", boxShadow: "none" }}
        onClick={onClick}
      >
        {btnText}
      </Button>
    </Flex>
  );
}
const basicStyles = {
  position: "fixed",
  color: "#333333",
  background: "#fffff",
  padding: "1em",
  minWidth: 300,
  flexDirection: "row",
  justifyContent: "space-between",
  borderRadius: "2px",
  boxShadow:
    "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)",
};
