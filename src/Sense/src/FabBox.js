import React from "react";
import "./stylesheets/FabBox.scss";
import View from "./View";
import Fab from "./Fab";
import Flex from "./Flex";
import Avatar from "./Avatar";
import Text from "./Text";
import Grid from "./Grid";

export default function FabBox(props) {
  const { data } = props;
  if (data.length >= 6) {
    throw new Error("too many dicks on the dance floor");
  }
  return (
    <Flex style={{ position: "absolute", bottom: 20, right: 20 }}>
      <Flex style={{ alignItems: "flex-end" }}>
        {data.map(({ text, img }, i) => (
          <Flex className="GridLayer" key={i} style={{ flexDirection: "row" }}>
            <View className="GridText">{text}</View>
            <Avatar
              className="GridAvatar"
              style={{ overflow: "hidden", margin: 0 }}
            >
              <img
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
                src={img}
              />
            </Avatar>
          </Flex>
        ))}
      </Flex>
      <Fab style={{ justifySelf: "flex-end", alignSelf: "center" }}>Click</Fab>
    </Flex>
  );
}
