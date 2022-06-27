import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#b1dec6",
      main: "#72bb94",
      dark: "#468a66",
      contrastText: "#fff",
    },
    secondary: {
      main: "#585c69",
    },
  },

  typography: {
    subtitle1: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 500,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);