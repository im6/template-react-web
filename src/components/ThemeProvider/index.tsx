import { FC } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

interface IProps {
  children: any;
}

const AppThemeProvider: FC<IProps> = ({ children }) => {
  const isDark = useSelector((state: any) => state.home.isDark);
  return (
    <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </MuiThemeProvider>
  );
};

export default AppThemeProvider;
