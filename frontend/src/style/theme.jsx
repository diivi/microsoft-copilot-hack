import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(188, 219, 165, 1)",
    },
    secondary: {
      main: "rgba(0, 40, 90, 1)",
    },
    background: {
      default: "#eeeee9",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
      disabled: "rgba(0, 40, 90, 1)",
    },
  },
  typography: {
    fontFamily: "Roboto Mono",
    fontWeightLight: 200,
  },
});

export default themeOptions;
