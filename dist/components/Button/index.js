import React from "react";
import * as S from "./styles";

const Button = ({
  text,
  size,
  disabled = false
}) => {
  return /*#__PURE__*/React.createElement(S.PartouButton, {
    className: size,
    disabled: disabled
  }, text);
};

export default Button;