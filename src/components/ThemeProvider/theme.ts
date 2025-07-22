import { createTheme } from "@mui/material/styles";

const sharedTheme = {
  typography: {
    fontFamily: '"Bitcount Prop Single", system-ui;',
    h1: {
      fontWeight: 700,
      fontSize: "2.125rem",
      lineHeight: 1.235,
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.334,
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
};

export const lightTheme = createTheme({
  ...sharedTheme,
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export const darkTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});
