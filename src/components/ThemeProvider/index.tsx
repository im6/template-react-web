import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;

export default AppThemeProvider;
