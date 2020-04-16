import React, { useState, useLayoutEffect, useRef } from "react";

import ScaleIn from "../../Sense/src/ScaleIn";
import DialogBox from "../../Sense/src/DialogBox";
import DialogText from "../../Sense/src/DialogText";
import DialogTitle from "../../Sense/src/DialogTitle";
import Fab from "../../Sense/src/Fab";
import Flex from "../../Sense/src/Flex";
import OutlineButton from "../../Sense/src/OutlineButton";
export default function BasicScaleIn(props) {
  const scaleRef = useRef(null);
  const [scaleIt, setScaleIt] = useState(false);
  const [first, setFirst] = useState(null);
  const [exists, setExists] = useState(false);
  const setAnim = (dim) => {
    setFirst(dim);
    console.log("first");
  };
  useLayoutEffect(() => {
    console.log("scaleRef");
    console.log(scaleRef.current);
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
          {" "}
          <DialogBox style={{ maxWidth: "auto" }}>
            <DialogTitle>Title</DialogTitle>
            <DialogText>
              Some text to read isn't this an intersting idea
            </DialogText>
            <Flex
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: "8px",
              }}
            >
              <OutlineButton
                onClick={() => setScaleIt((t) => !t)}
                style={{ border: "none", marginLeft: "8px" }}
              >
                Delete
              </OutlineButton>{" "}
              <OutlineButton
                onClick={() => setExists(true)}
                style={{ border: "none", marginLeft: "8px" }}
              >
                Install
              </OutlineButton>
            </Flex>
          </DialogBox>
        </ScaleIn>
      )}

      <Fab
        onClick={(e) => {
          setAnim(getDimensions(e), scaleRef);
          setScaleIt(true);
          console.log("hi");
        }}
        style={{ position: "absolute", right: 20, bottom: 20 }}
      >
        Hi
      </Fab>
    </>
  );
}

function getDimensions(e, refy) {
  const dimensions = e.target.getBoundingClientRect();

  const top = dimensions.top;
  const left = dimensions.left;
  const height = dimensions.height;
  const width = dimensions.width;
  console.log(refy);
  return { top, left, height, width };
}
