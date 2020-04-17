import React from "react";

import "./stylesheets/TextFieldFull.scss";
import TextField from "./TextField";
import View from "./View";
import Flex from "./Flex";
import Text from "./Text";
import ErrorIcon from "./smallComps/ErrorIcon";
export default function TextFieldFull(props) {
  const {
    style,
    className,
    onChange,
    value,
    errorText = "ErrorText",
    maxLength,
    required,
    type,
    placeholder,
    helperText = "Helper Text",
    error,
  } = props;

  return (
    <View>
      <Flex>
        <TextField
          style={style}
          value={value}
          type={type}
          onChange={onChange}
          maxLength={maxLength}
          required={required}
          placeholder={placeholder}
          type={type}
          className={className ? className : "TextFieldFull"}
        />
        {error && <ErrorIcon />}
      </Flex>
      <Flex
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: "0px 10px",
        }}
      >
        {error ? (
          <Text className="ErrorText" style={{ padding: 0, margin: 0 }}>
            {errorText}
          </Text>
        ) : (
          <Text style={{ padding: 0, margin: 0 }}>{helperText}</Text>
        )}{" "}
        <Text style={{ padding: 0, margin: 0 }}>
          {formatLimit(value, maxLength)}
        </Text>
      </Flex>
    </View>
  );
}

function formatLimit(value, maxLength) {
  return `${value.length} / ${maxLength}`;
}
