import { theme } from "./";

export const borders: any = {
  borderRadius: {
    round: "100px",
    default: theme.spacing["spacing-8"],
    small: theme.spacing["spacing-4"],
    none: theme.spacing["spacing-0"],
  },
  borderWidth: {
    border: "1px",
    default: {
      style: "solid",
      width: "1px",
      color: theme.colors.neutral.borderHover,
    },
  },
};
