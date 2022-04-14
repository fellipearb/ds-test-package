import styled from "styled-components";

interface ButtonProps {
  disabled: boolean;
}

export const PartouButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background-color: ${(props: ButtonProps) =>
    props.disabled ? "#17192614" : "#122eb5"};
  color: ${(props: ButtonProps) => (props.disabled ? "#ADAEB3" : "#FFFFFF")};
  cursor: pointer;
  transition: ease-in-out all 0.2s;

  &.Default {
    width: 84px;
    height: 32px;
  }
  &.Medium {
    width: 98px;
    height: 40px;
  }
  &.Large {
    width: 106px;
    height: 48px;
  }
  &.XLarge {
    width: 130px;
    height: 56px;
  }

  ${(props: ButtonProps) =>
    Boolean(!props.disabled) &&
    `
        &:focus {
            outline: 2px solid #3e50da;
            outline-offset: 2px;
        }

        &:active {
            background-color: #070e2c !important;
        }

        &:hover {
            background-color: #0d2177;
        }
    `};
`;
