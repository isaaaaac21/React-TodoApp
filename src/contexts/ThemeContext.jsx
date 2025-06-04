import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336", // red #f44336
      light: "#ff7961", // lighter red #ff7961
      dark: "#ba000d", // darker red       #ba000d
    },
    secondary: {
      main: "#4caf50", // complementary green          #4caf50
      light: "#80e27e", // lighter green     #80e27e
      dark: "#087f23", // darker green #087f23
    },
    custom: {
      main: "#ff9800", // orange - analogous to red #ff9800
    },
    info: {
      main: "#2196f3", // material ui blue #2196f3
      light: "#64b5f6", // #64b5f6
      dark: "#1976d2", // #1976d2
    },
  },
});
