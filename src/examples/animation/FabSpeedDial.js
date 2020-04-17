import React from "react";
import View from "../../Sense/src/View";
import FabBox from "../../Sense/src/FabBox";
export default function FabSpeedDial(props) {
  return (
    <View style={{ height: "100%", minHeight: "100%" }}>
      <FabBox
        data={[
          {
            text: "Mr Hendricks",
            img: "https://source.unsplash.com/user/erondu",
          },
          { text: "Ms Potts", img: "https://source.unsplash.com/user/erondu" },
        ]}
      />
    </View>
  );
}
