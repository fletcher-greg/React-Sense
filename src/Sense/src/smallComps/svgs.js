import React from "react";

export function ErrorSvg(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );
}

export function ChatIconSvg(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
    >
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export function CheckSvg(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  );
}

export function CircleSvg(props) {
  const { svgRef, stroke, ...rest } = props;
  return (
    <svg
      {...rest}
      fill="none"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        ref={svgRef}
        cx="25"
        cy="25"
        r="22.5"
        stroke={stroke}
        strokeWidth="5"
      />
    </svg>
  );
}
