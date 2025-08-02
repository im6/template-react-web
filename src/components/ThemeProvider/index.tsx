import { FC } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

interface IProps {
  isDark: boolean;
  children: any;
}

const AppThemeProvider: FC<IProps> = ({ isDark, children }) => {
  return (
    <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </MuiThemeProvider>
  );
};

export default AppThemeProvider;
