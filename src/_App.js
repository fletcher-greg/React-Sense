import React, { useState, useRef, useLayoutEffect } from "react";
import "./styles.scss";
import AccountIcon from "./AccountIcon";
import {
  Flex,
  View,
  Text,
  TextInput,
  Button,
  WideButton,
  Grid,
  DialogBox,
  DialogTitle,
  DialogText,
  DialogListBox,
  List,
  ListItem,
  Scrim,
  OutlineButton,
} from "./Sense/index";
import BasicScaleIn from "./examples/animation/BasicScaleIn";
import Avatar from "./Sense/src/Avatar";
export default function App() {
  const [text, setText] = useState("useless placeholder");
  const [exists, setExists] = useState(false);

  return (
    <div className="App">
      <View>
        <Text style={{ color: "red" }}>Hi</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button style={{ background: "red" }}>Hi</Button>
        <p>omg</p>
        <Button>lol</Button>
        <div />
      </View>
      <WideButton style={{ padding: "1em", outline: "none", border: "none" }}>
        hi
      </WideButton>
      <Flex style={{ flexDirection: "row" }}>
        <h1>hi</h1>
        <h1>hi</h1>
      </Flex>
      <Grid>hi</Grid>
      <DialogBox style={{ maxWidth: "auto" }}>
        <DialogTitle>Title</DialogTitle>
        <DialogText>Some text to read isn't this an intersting idea</DialogText>
        <Flex
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: "8px",
          }}
        >
          <OutlineButton style={{ border: "none", marginLeft: "8px" }}>
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

      <OutlineButton style={{ "--bg": "pink" }}>hi</OutlineButton>
      <OutlineButton
        onClick={() => console.log("hi")}
        style={{
          "--bg-hover": "red",
          transition: "background .3s linear",
          padding: "10px 20px 15px",
        }}
      >
        hi
      </OutlineButton>
      {exists && (
        <Scrim>
          <DialogListBox>
            <DialogTitle>Header</DialogTitle>

            <List>
              {Array(3)
                .fill(1)
                .map((_, i) => (
                  <ListItem onClick={() => setExists(false)} key={i}>
                    <Avatar>
                      <AccountIcon />
                    </Avatar>
                    <Text>hi</Text>
                  </ListItem>
                ))}
            </List>
          </DialogListBox>
        </Scrim>
      )}

      <BasicScaleIn />
    </div>
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
