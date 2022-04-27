import React from "react";
import Loading from "../Loading";
import * as S from "./styles";
export interface IButton {
  children: string;
  size: "Default" | "Medium" | "Large" | "XLarge";
  variant: "primary" | "secondary" | "tertiary" | "ghost";
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  size,
  variant,
  disabled,
  loading,
  onClick,
}: IButton) => {
  const content = loading ? <Loading /> : children;

  return (
    <S.PartouButton
      className={`${size} ${variant} ${Boolean(disabled) && "disabled"}`}
      disabled={disabled || false}
      onClick={onClick}
    >
      {content}
    </S.PartouButton>
  );
};

export default Button;
