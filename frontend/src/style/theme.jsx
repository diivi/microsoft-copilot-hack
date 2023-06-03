import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#bcdba5",
    },
    secondary: {
      main: "#00285a",
    },

    background: {
      default: "#eeeee9",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
      disabled: "#00285a",
    },
  },
  typography: {
    fontFamily: "Roboto Mono",
    fontWeightLight: 200,
  },
});

export default themeOptions;
