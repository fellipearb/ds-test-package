import React from "react";
import * as S from "./styles";
export interface IButton {
  text: string;
  size?: "Default" | "Medium" | "Large" | "XLarge";
  disabled?: boolean;
}

const Button = ({ text, size, disabled = false }: IButton) => {
  return (
    <S.PartouButton className={size} disabled={disabled}>
      {text}
    </S.PartouButton>
  );
};

export default Button;
