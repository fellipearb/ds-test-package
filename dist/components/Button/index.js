import React from "react";
import Loading from "../Loading";
import * as S from "./styles";

const Button = ({
  children,
  size,
  disabled,
  loading,
  onClick
}) => {
  const content = loading ? /*#__PURE__*/React.createElement(Loading, null) : children;
  return /*#__PURE__*/React.createElement(S.PartouButton, {
    className: size,
    disabled: disabled || false,
    onClick: onClick
  }, content);
};

export default Button;