import React from "react";
import Flex from "./Flex";
import "./stylesheets/Card.scss";
import updateStyles from "./utils/updateStyles";

export default function Card(props) {
  const {
    children,
    outlined,
    style,
    img,
    className,
    title,
    scaleRef,
    data,
    imageRef,
    ...rest
  } = props;
  let combinedStyles = {};

  if (outlined) {
    combinedStyles = updateStyles(basicStyles, {
      ...style,
      "--box-shadow": "none",
      "--border": "1px solid rgb(224, 224, 224)",
    });
  } else {
    combinedStyles = updateStyles(basicStyles, style);
  }
  return (
    <Flex
      scaleRef={scaleRef}
      {...rest}
      className={className ? className : "Card"}
      style={combinedStyles}
    >
      {img && (
        <header style={{ flexGrow: "1" }}>
          <img
            ref={imageRef}
            data={data}
            src={img}
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </header>
      )}
      <Flex className="CardContent">
        <h3 data="invert" className="CardTitle">
          {title}
        </h3>
        {children}
      </Flex>
    </Flex>
  );
}

const basicStyles = { width: 344 };
