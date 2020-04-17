import React from "react";
import { ErrorSvg } from "./svgs";

export default function ErrorIcon(props) {
  const { className } = props;
  return (
    <i
      className={className ? className : "ErrorIcon"}
      style={{
        top: "50%",
        position: "absolute",
        right: "12px",
      }}
    >
      <ErrorSvg width="24px" height="24px" fill="red" />
    </i>
  );
}
