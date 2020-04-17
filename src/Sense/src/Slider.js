import React, { useRef } from "react";
import Input from "./Input";
import updateStyles from "./utils/updateStyles";
import "./stylesheets/Slider.scss";
import View from "./View";
import Flex from "./Flex";
import Grid from "./Grid";

export default function Slider(props) {
  const testRef = useRef(null);
  const { style, className, value, onChange, step, max, min } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <Grid
      className="Parent"
      style={{ justifyContent: "center", "--pos": value }}
    >
      <View className="Wrapper">
        <View className="Circle"></View>
      </View>
      <Input
        ref={testRef}
        className={className ? className : "Slider"}
        value={value}
        onChange={onChange}
        step={step}
        max={max}
        min={min}
        style={combinedStyles}
        type="range"
      />
    </Grid>
  );
}

const basicStyles = {};
