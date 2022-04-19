import { theme } from "./";

export const typography: any = {
  heading: {
    small600: {
      fontFamily: theme.fonts.default,
      fontSize: theme.spacing["spacing-24"],
      fontWeight: theme.fonts.weight.semiBold,
      lineHeight: theme.spacing["spacing-32"],
      letterSpacing: theme.fonts.spacing.default,
    },
    default600: {
      fontFamily: theme.fonts.default,
      fontSize: theme.spacing["spacing-32"],
      fontWeight: theme.fonts.weight.semiBold,
      letterSpacing: theme.fonts.weight.semiBold,
      lineHeight: theme.spacing["spacing-40"],
    },
  },
  label: {
    xlarge500: {
      fontFamily: theme.fonts.default,
      fontSize: "22px",
      fontWeight: theme.fonts.weight.medium,
      lineHeight: theme.spacing["spacing-28"],
      letterSpacing: theme.fonts.spacing.default,
    },
    xlarge400: {
      fontFamily: theme.fonts.default,
      fontSize: "22px",
      fontWeight: theme.fonts.weight.regular,
      lineHeight: theme.spacing["spacing-28"],
      letterSpacing: theme.fonts.spacing.default,
    },
    large500: {
      fontFamily: theme.fonts.default,
      fontSize: "18px",
      fontWeight: theme.fonts.weight.medium,
      letterSpacing: theme.fonts.spacing.default,
      lineHeight: theme.spacing["spacing-24"],
    },
    large400: {
      fontFamily: theme.fonts.default,
      fontSize: "18px",
      fontWeight: theme.fonts.weight.regular,
      letterSpacing: theme.fonts.spacing.default,
      lineHeight: theme.spacing["spacing-24"],
    },
    default400: {
      fontFamily: theme.fonts.default,
      fontSize: theme.spacing["spacing-16"],
      fontWeight: theme.fonts.weight.regular,
      letterSpacing: "",
      lineHeight: theme.spacing["spacing-20"],
    },
    default500: {
      fontFamily: theme.fonts.default,
      fontSize: theme.spacing["spacing-16"],
      fontWeight: theme.fonts.weight.medium,
      letterSpacing: theme.spacing["spacing-0"],
      lineHeight: theme.spacing["spacing-20"],
    },
    small400: {
      fontFamily: theme.fonts.default,
      fontSize: "14px",
      fontWeight: theme.fonts.weight.regular,
      letterSpacing: theme.fonts.spacing.large,
      lineHeight: theme.spacing["spacing-16"],
    },
    small500: {
      fontFamily: theme.fonts.default,
      fontSize: "14px",
      fontWeight: theme.fonts.weight.medium,
      letterSpacing: theme.fonts.spacing.large,
      lineHeight: theme.spacing["spacing-16"],
    },
    xsmall400: {
      fontFamily: theme.fonts.default,
      fontSize: "12px",
      fontWeight: theme.fonts.weight.regular,
      letterSpacing: theme.fonts.spacing.xlarge,
      lineHeight: theme.spacing["spacing-16"],
    },
    xsmall500: {
      fontFamily: theme.fonts.default,
      fontSize: "12px",
      fontWeight: theme.fonts.weight.medium,
      letterSpacing: theme.fonts.spacing.xlarge,
      lineHeight: theme.spacing["spacing-16"],
    },
  },
  body: {
    default400: {
      fontFamily: theme.fonts.default,
      fontSize: theme.spacing["spacing-16"],
      fontWeight: theme.fonts.weight.regular,
      lineHeight: theme.spacing["spacing-24"],
    },
    default500: {
      fontFamily: theme.fonts.default,
      fontSize: theme.spacing["spacing-16"],
      fontWeight: theme.fonts.weight.medium,
      lineHeight: theme.spacing["spacing-24"],
    },
    large400: {
      fontFamily: theme.fonts.default,
      fontSize: "18px",
      fontWeight: theme.fonts.weight.regular,
      lineHeight: theme.spacing["spacing-28"],
    },
    large500: {
      fontFamily: theme.fonts.default,
      fontSize: "18px",
      fontWeight: theme.fonts.weight.medium,
      lineHeight: theme.spacing["spacing-28"],
    },
  },
};
