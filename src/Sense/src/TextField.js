import React from "react";

import TextInput from "./TextInput";

export default function TextField(props) {
  const { children } = props;

  return <TextInput>{children}</TextInput>;
}
