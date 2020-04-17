import React, { useState, useRef, useLayoutEffect } from "react";
import "./components/FormScale.scss";
import Flex from "../../Sense/src/Flex";
import List from "../../Sense/src/List";
import WideButton from "../../Sense/src/WideButton";
import TextField from "../../Sense/src/TextField";
import Fab from "../../Sense/src/Fab";
import ScaleIn from "../../Sense/src/ScaleIn";
import TopMenu from "../../Sense/src/TopMenu";
import Text from "../../Sense/src/Text";
import View from "../../Sense/src/View";
import Cross from "./components/Cross";
import Menu from "./components/Menu";
import TextFieldFull from "../../Sense/src/TextFieldFull";
export default function FormScaleIn() {
  const scaleRef = useRef(null);
  const [scaleIt, setScaleIt] = useState(false);
  const [first, setFirst] = useState(null);
  const [text, setText] = useState("");
  const [textFull, setTextFull] = useState({
    error: undefined,
    text: "",
    errorText: "",
  });
  const formateText = (e) => {
    let { value } = e.target;

    if (value.length >= 20) {
      return setTextFull({
        text: value,
        error: true,
        errorText: "Too many chars",
      });
    }
    setTextFull({ text: value, error: false, errorText: "" });
  };
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
      <TopMenu>
        <Flex
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={{ height: "40px", width: "40px" }}>
            {scaleIt ? (
              <Cross onClick={() => setScaleIt(false)} className="spinCross" />
            ) : (
              <Menu />
            )}
          </View>
        </Flex>
      </TopMenu>
      <div style={{ height: "auto", minHeight: "90%" }}>
        {scaleIt && (
          <ScaleIn scaleRef={scaleRef}>
            <List style={{ justifyContent: "space-evenly", height: "100%" }}>
              <TextField
                placeholder="useless text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <TextField
                placeholder="useless text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <TextField
                placeholder="useless text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <TextField
                placeholder="useless text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <TextFieldFull
                value={textFull.text}
                onChange={(e) => formateText(e)}
                error={textFull.error}
                maxLength={20}
                errorText={textFull.errorText}
              />
              <WideButton
                onClick={() => setScaleIt((b) => !b)}
                style={{ padding: "1em" }}
              >
                Submit
              </WideButton>
            </List>
          </ScaleIn>
        )}
      </div>

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

function getDimensions(e) {
  const dimensions = e.target.getBoundingClientRect();

  const top = dimensions.top;
  const left = dimensions.left;
  const height = dimensions.height;
  const width = dimensions.width;

  return { top, left, height, width };
}
