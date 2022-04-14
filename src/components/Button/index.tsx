import React from "react";
import Loading from "../Loading";
import * as S from "./styles";
export interface IButton {
  children: string;
  size: "Default" | "Medium" | "Large" | "XLarge";
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

const Button = ({ children, size, disabled, loading, onClick }: IButton) => {
  const content = loading ? <Loading /> : children;

  return (
    <S.PartouButton
      className={size}
      disabled={disabled || false}
      onClick={onClick}
    >
      {content}
    </S.PartouButton>
  );
};

export default Button;
