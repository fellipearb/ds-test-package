import React from "react";
import Loading from "../Loading";
import * as S from "./styles";
import "./index.css";
export interface IButton {
  children: string;
  size: "default" | "medium" | "large" | "xlarge";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  disabled?: boolean;
  radio?: boolean;
  radioActive?: boolean;
  radioValue?: string;
  radioName?: string;
  radioPosition?: "right" | "left";
  loading?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  size,
  variant,
  disabled,
  radio,
  radioActive = false,
  radioValue,
  radioName,
  radioPosition = "left",
  loading,
  onClick,
}: IButton) => {
  const content = loading ? <Loading /> : children;

  return (
    <S.PartouButton
      className={`${variant} ${size} ${Boolean(disabled) && "disabled"} ${
        Boolean(radio) && "radio"
      } ${
        radioPosition === "left" ? "rl" : "rr"
      } w-auto flex items-center justify-center rounded-lg transition-all`}
      disabled={disabled || false}
      onClick={onClick}
    >
      {Boolean(radio) && (
        <label className={`${Boolean(radioActive) && "radioActive"}`}>
          <input
            type="checkbox"
            value={radioValue}
            name={radioName}
            checked={radioActive}
            disabled={disabled}
            hidden={true}
          />
        </label>
      )}
      {content}
    </S.PartouButton>
  );
};

export default Button;
