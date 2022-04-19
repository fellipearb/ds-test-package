import React from "react";
import { ThemeProvider } from "styled-components";

import { borders } from "./borders";
import { colors } from "./colors";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { fonts } from "./fonts";

export const theme = {
  borders,
  colors,
  shadows,
  spacing,
  typography,
  fonts,
};

export const DefaultThemeProvider = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
