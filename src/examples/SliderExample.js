import React, { useState } from "react";

import Flex from "../Sense/src/Flex";
import Slider from "../Sense/src/Slider";

export default function SliderExample(props) {
  const [value, setValue] = useState(40);
  const test = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <Flex
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <Slider step="1" value={value} onChange={(e) => test(e)} />
    </Flex>
  );
}
