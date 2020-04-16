import React, { useState, useRef, useLayoutEffect } from "react";

import Flex from "../../Sense/src/Flex";
import List from "../../Sense/src/List";
import WideButton from "../../Sense/src/WideButton";
import TextField from "../../Sense/src/TextField";
import Fab from "../../Sense/src/Fab";
import ScaleIn from "../../Sense/src/ScaleIn";

export default function FormScaleIn() {
  const scaleRef = useRef(null);
  const [scaleIt, setScaleIt] = useState(false);
  const [first, setFirst] = useState(null);
  const [text, setText] = useState("hi");

  const setAnim = (dim) => {
    setFirst(dim);
  };

  useLayoutEffect(() => {
    if (scaleRef.current) {
      const last = scaleRef.current.getBoundingClientRect();
      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;
      const deltaW = first.width / last.width;
      const deltaH = first.height / last.height;

      scaleRef.current.animate(
        [
          {
            transformOrigin: "top left",
            transform: `
              translate(${deltaX}px, ${deltaY}px)
              scale(${deltaW}, ${deltaH})
            `,
          },
          {
            transformOrigin: "top left",
            transform: "none",
          },
        ],
        {
          duration: 300,
          easing: "ease-in-out",
          fill: "both",
        }
      );
    }
  }, [scaleIt]);
  return (
    <>
      {scaleIt && (
        <ScaleIn scaleRef={scaleRef}>
          <List style={{ justifyContent: "space-evenly", height: "100%" }}>
            <TextField value={text} onChange={(e) => setText(e.target.value)} />
            <TextField value={text} onChange={(e) => setText(e.target.value)} />
            <TextField value={text} onChange={(e) => setText(e.target.value)} />
            <TextField value={text} onChange={(e) => setText(e.target.value)} />
            <TextField value={text} onChange={(e) => setText(e.target.value)} />
            <WideButton
              onClick={() => setScaleIt((b) => !b)}
              style={{ padding: "1em" }}
            >
              Submit
            </WideButton>
          </List>
        </ScaleIn>
      )}

      {!scaleIt && (
        <Fab
          onClick={(e) => {
            setAnim(getDimensions(e), scaleRef);
            setScaleIt((t) => !t);
            console.log("hi");
          }}
          style={{ position: "absolute", right: 20, bottom: 20 }}
        >
          Hi
        </Fab>
      )}
    </>
  );
}

function getDimensions(e, refy) {
  const dimensions = e.target.getBoundingClientRect();

  const top = dimensions.top;
  const left = dimensions.left;
  const height = dimensions.height;
  const width = dimensions.width;

  return { top, left, height, width };
}
