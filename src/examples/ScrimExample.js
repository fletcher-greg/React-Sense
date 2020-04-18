import React, { useState } from "react";
import OutlineButton from "../Sense/src/OutlineButton";
import View from "../Sense/src/View";
import Scrim from "../Sense/src/Scrim";
export default function ScrimExample() {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <OutlineButton onClick={() => setOpen(true)}>Click</OutlineButton>

      {open && <Scrim onClick={() => setOpen(false)}></Scrim>}
    </View>
  );
}
