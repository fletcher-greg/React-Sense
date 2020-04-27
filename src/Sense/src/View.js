import React from "react";
export default function View({
  style,
  children,
  onClick,
  className,
  scaleRef,
  data,
}) {
  return (
    <div
      ref={scaleRef}
      data={data}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
