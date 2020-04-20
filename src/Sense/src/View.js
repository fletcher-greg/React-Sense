import React from "react";
export default function View({
  style,
  children,
  onClick,
  className,
  scaleRef,
}) {
  return (
    <div ref={scaleRef} className={className} onClick={onClick} style={style}>
      {children}
    </div>
  );
}
