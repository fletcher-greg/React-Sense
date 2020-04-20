import React, { useState } from "react";
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
  const [view, setView] = useState("closed");
  const onClick = () => console.log("hi");
  const clasy = view === "view" ? "ToggleTest" : "ToggleTest closed";
  const toggle = () => {
    console.log(view);
    view === "view" ? setView("closed") : setView("view");
  };
  let array = Array(10).fill();
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
      <Card title="Hello World">
        <Flex className={clasy}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <Text>Hi there people</Text>
            ))}
        </Flex>
        <Divider />
        <Button
          style={{ "--bg": "none", alignSelf: "flex-start", boxShadow: "none" }}
          onClick={toggle}
        >
          toggle
        </Button>
      </Card>
    </Flex>
  );
}
