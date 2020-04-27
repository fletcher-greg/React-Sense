import React from "react";
import View from "./View";

import "./stylesheets/SocialIcon.scss";
import updateStyles from "./utils/updateStyles";
export default function SocialIcon(props) {
  const { className, style, href, src } = props;
  const combinedStyles = updateStyles(basicStyles, style);
  return (
    <View
      style={combinedStyles}
      className={className ? className : "SocialIcon"}
    >
      <a href={href}>
        <img src={src} className="AvatarImage" />
      </a>
    </View>
  );
}

const basicStyles = {};
