import React, { useState } from "react";

import SnackBar from "../Sense/src/SnackBar";

import View from "../Sense/src/View";
import Banner from "../Sense/src/Banner";
import Divider from "../Sense/src/Divider";
import Flex from "../Sense/src/Flex";
import Appear from "../Sense/src/Appear";
import ChatIcon from "../Sense/src/ChatIcon";
import ChoiceChip from "../Sense/src/ChoiceChip";

export default function SnackBarExample() {
  const [appear, setAppear] = useState(true);
  const toggle = () => setAppear((b) => !b);
  return (
    <View style={{ height: "100%" }}>
      <Banner btnText="Retry">Hi, you're logged out</Banner>
      <Flex
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Appear>
            <Flex
              style={{
                width: 500,
                height: 700,
                justifyContent: "space-between",
                alignItems: "center",
                background: "darkblue",
              }}
            >
              {Array(10)
                .fill(1)
                .map((_, i) => (
                  <View style={{ width: "40%" }}>
                    <Divider />
                  </View>
                ))}
            </Flex>
          </Appear>
        </View>
      </Flex>
      <ChatIcon
        text="Support"
        style={{
          borderTopLeftRadius: "20px",
          padding: "0 1em",
          background: "black",
          color: "white",
        }}
      />
      <View style={{ width: 100 }}>
        <ChoiceChip>Small</ChoiceChip>
      </View>
      <View style={{ width: 100 }}>
        <ChoiceChip>Medium</ChoiceChip>
      </View>
      {appear && (
        <SnackBar
          onClick={toggle}
          style={{ bottom: 20, left: 150 }}
          btnText="Retry"
        >
          There was an error
        </SnackBar>
      )}
    </View>
  );
}
