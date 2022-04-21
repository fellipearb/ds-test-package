import styled from "styled-components";
import { spacing } from "./../../theme/spacing";
import { colors } from "./../../theme/colors";

export const PartouButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${spacing["spacing-8"]};
  cursor: pointer;
  transition: ease-in-out all 0.125s;

  &.primary {
    background-color: ${colors.interactive.backgroundStrong};
    color: ${colors.base.white};
    &:hover {
      background-color: ${colors.interactive.backgroundStrongHover};
    }
    &:focus {
      outline: 2px solid ${colors.interactive.borderActive};
      outline-offset: 0.75px;
    }
  }
  &.primary.disabled {
    background-color: ${colors.interactive.backgroundStrongDisabled};
    color: ${colors.base.white};
  }
  &.secondary {
    background-color: ${colors.interactive.field};
    color: ${colors.interactive.text};
    &:hover {
      background-color: ${colors.interactive.fieldHover};
    }
    &:focus {
      outline: 2px solid ${colors.interactive.borderActive};
      outline-offset: 0.75px;
    }
  }
  &.secondary.disabled {
    background-color: ${colors.interactive.field};
    color: ${colors.base.white};
  }
  &.tertiary {
    background-color: ${colors.base.white};
    color: ${colors.interactive.text};
    &:hover {
      background-color: ${colors.interactive.field};
      color: ${colors.interactive.textHover};
    }
    &:focus {
      background-color: ${colors.interactive.fieldActive};
      color: ${colors.interactive.textHover};
    }
  }
  &.tertiary.disabled {
    color: ${colors.interactive.textDisabled};
  }

  &.Default {
    padding: ${spacing["spacing-8"]} ${spacing["spacing-16"]};
  }
  &.Medium {
    padding: ${spacing["spacing-10"]} ${spacing["spacing-24"]};
  }
  &.Large {
    padding: ${spacing["spacing-14"]} ${spacing["spacing-28"]};
  }
  &.XLarge {
    padding: ${spacing["spacing-18"]} ${spacing["spacing-36"]};
  }
`;
