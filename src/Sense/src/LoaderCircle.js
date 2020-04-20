import React, { useRef, useLayoutEffect, useState } from "react";
import "./stylesheets/LoaderCircle.scss";
import View from "./View";
import { CircleSvg } from "./smallComps/svgs";

export default function LoaderCircle(props) {
  const { className } = props;
  const svgRef = useRef(null);
  const [length, setLength] = useState(0);
  useLayoutEffect(() => {
    setLength(svgRef.current.getTotalLength());
  }, []);

  return (
    <View>
      <CircleSvg
        className={className ? className : "LoaderCircle"}
        style={{ "--length": length }}
        stroke="#4c14fc"
        svgRef={svgRef}
        width="50"
        height="50"
      />
    </View>
  );
}
