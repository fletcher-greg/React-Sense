import React, { useRef, useLayoutEffect, useState } from "react";

import getDimensions from "../../Sense/src/utils/getDimensions";
import getInvertedChildren from "../../Sense/src/utils/getInvertedChildren";
import invertChildren from "../../Sense/src/utils/invertChildren";
import View from "../../Sense/src/View";
import Card from "../../Sense/src/Card";
import Flex from "../../Sense/src/Flex";
import ScaleIn from "../../Sense/src/ScaleIn";
import ChoiceChip from "../../Sense/src/ChoiceChip";
import TextField from "../../Sense/src/TextField";

export default function ScaleCard(props) {
  const [first, setFirst] = useState(null);
  const [scaleIt, setScaleIt] = useState(false);
  const imageRef = useRef(null);
  function calculation(e) {
    const dimensions = e.currentTarget.getBoundingClientRect();

    const top = dimensions.top;
    const left = dimensions.left;
    const height = dimensions.height;
    const width = dimensions.width;
    let bottom = dimensions.bottom;
    let right = dimensions.right;
    return { top, left, height, width, bottom, right };
  }

  const scaleRef = useRef(null);
  useLayoutEffect(() => {
    if (scaleRef.current) {
      getDimensions(scaleRef, first);
    }
  }, [scaleIt]);
  return (
    <View>
      {scaleIt && (
        <ScaleIn>
          <Flex
            style={{
              height: "100vh",
              alignItems: "center",
            }}
          >
            <Card
              imageRef={imageRef}
              data="no"
              style={{ width: 400 }}
              scaleRef={scaleRef}
              onClick={(e) => setFirst(calculation(e))}
              img="https://source.unsplash.com/xySVQV6t2dQ/400x250"
              title="Hello World"
            >
              <span data="invert">hi there</span>
            </Card>
          </Flex>
        </ScaleIn>
      )}
      (
      <Flex
        style={{
          justifyContent: "center",
          overflow: "scroll",
          alignItems: "center",
          height: "100vh",
          visibility: scaleIt ? "hidden" : "visible",
        }}
      >
        <Card
          onClick={(e) => {
            setFirst(calculation(e));
            setScaleIt(true);
          }}
          img="https://source.unsplash.com/xySVQV6t2dQ/400x250"
          title="Hello World"
        >
          <span>hi there</span>
        </Card>
      </Flex>
    </View>
  );
}
