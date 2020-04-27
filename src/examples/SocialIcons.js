import React, { user } from "react";
import Flex from "../Sense/src/Flex";
import SocialIcon from "../Sense/src/SocialIcon";
export default function SocialIcons(props) {
  return (
    <Flex
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SocialIcon href="/card" src="https://source.unsplash.com/random/60x60" />
    </Flex>
  );
}

function ErrorView(props) {
  const { children } = props;
  const style = { color: "blue" };
  if (typeof children === "string")
    throw new Error("You cannot pass strings to View");
  console.log(typeof children);
  return <div style={style}>{children}</div>;
}

function CatchError(props) {
  const { children } = props;

  try {
    return <div>{children}</div>;
  } catch (e) {
    return "ohuh" + e;
  }
}
