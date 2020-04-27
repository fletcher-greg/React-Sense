import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./ToggleTest.scss";
import Card from "../Sense/src/Card";
import WideButton from "../Sense/src/WideButton";
import Text from "../Sense/src/Text";
import Flex from "../Sense/src/Flex";
import Divider from "../Sense/src/Divider";
import ChoiceChip from "../Sense/src/ChoiceChip";
import Button from "../Sense/src/Button";
import View from "../Sense/src/View";

export default function CardExample(props) {
  const [view, setView] = useState("view");
  const onClick = () => console.log("hi");
  const [initial, setInitial] = useState(null);
  const bottomRef = useRef(null);
  const clasy = view === "view" ? "ToggleTest" : "ToggleTest closed";
  const toggle = (e) => {
    const dim = e.currentTarget.getBoundingClientRect();
    setInitial({
      left: dim.left,
      top: dim.top,
      width: dim.width,
      height: dim.height,
    });
    view === "view" ? setView("closed") : setView("view");
  };
  let array = Array(2).fill();
  useLayoutEffect(() => {
    console.log("hi");
    if (initial) {
      animate(initial, bottomRef);
    }
  }, [view]);
  return (
    <Flex
      style={{
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      {array.map((_, i) => (
        <Card
          key={i}
          title="Hello World"
          img="https://source.unsplash.com/random/400x200"
        >
          <Text
            style={{
              fontSize: "0.875rem",
              lineHeight: " 1.25rem",
              margin: "0px 0px 10px 0px",
            }}
          >
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <WideButton onClick={onClick}>Click</WideButton>
        </Card>
      ))}

      <Card style={{ "--padding": "0px 16px 0px 16px" }} title="Cafe Baldilico">
        <Flex style={{ padding: "0px 0px 0px 0px" }}>
          <Text>
            Small plates, salads, ice-cream, you name it, we've got it.{" "}
          </Text>
          <Divider />
          <Text>Tonight's Availability</Text>
          <Flex
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <ChoiceChip>5:30pm</ChoiceChip>
            <ChoiceChip>6:30pm</ChoiceChip>
            <ChoiceChip>7:30pm</ChoiceChip>
            <ChoiceChip>8:30pm</ChoiceChip>
          </Flex>
          <View style={{ padding: "8px 0px 8px 0px" }}>
            <Button
              style={{
                "--bg": "none",
                alignSelf: "flex-start",
                boxShadow: "none",
              }}
            >
              Reserve
            </Button>
          </View>
        </Flex>
      </Card>
      <Card
        data={view === "view" ? "closed" : "view"}
        title="Hello World"
        className="Test"
      >
        <Flex className={clasy}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <Text>Hi there people</Text>
            ))}
        </Flex>
        <Flex scaleRef={bottomRef} onClick={(e) => toggle(e)}>
          <Divider />
          <Button
            style={{
              "--bg": "none",
              alignSelf: "flex-start",
              boxShadow: "none",
            }}
          >
            toggle
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
}

function animate(first, ref) {
  const last = ref.current.getBoundingClientRect();
  const left = first.left - last.left;
  const top = first.top - last.top;
  const deltaW = first.width / last.width;
  const deltaH = first.height / last.height;

  // extra
  let width = first.width - last.width;
  let height = first.height - last.height;
  console.log(left, top, deltaH, deltaW);
  ref.current.animate(
    [
      {
        transformOrigin: "top left",
        transform: `
        translate(${left}px, ${top}px)
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
      easing: "cubic-bezier(0, 0.5, 0.175, 1)",
      fill: "both",
    }
  );
}
