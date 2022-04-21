import React from "react";
import Loading from "../Loading";
import * as S from "./styles";
import "./index.css";
export interface IButton {
  children: string;
  size: "default" | "medium" | "large" | "xlarge";
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  icon?: string;
  iconPosition?: "right" | "left";
  loading?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  size,
  variant,
  disabled,
  icon,
  iconPosition = "left",
  loading,
  onClick,
}: IButton) => {
  const content = loading ? <Loading /> : children;

  return (
    <S.PartouButton
      className={`${variant} ${size} ${Boolean(disabled) && "disabled"} ${
        Boolean(icon) && "icon"
      } ${
        iconPosition === "left" ? "iconLeft" : "iconRight"
      } w-auto flex items-center justify-center rounded-lg transition-all`}
      disabled={disabled || false}
      onClick={onClick}
    >
      {Boolean(icon) && <img src={icon} alt="Button Alt" />}
      {content}
    </S.PartouButton>
  );
};

export default Button;
