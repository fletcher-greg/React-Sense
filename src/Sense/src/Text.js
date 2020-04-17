import React from "react";

export default function Text({ style, children, className }) {
  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
}
