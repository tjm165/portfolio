import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./components/example";
import { createTheme, Palette, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import createMuiTheme, { Theme, ThemeOptions } from "@mui/material";
import { HeroSection } from "./components/common";
import MyHeader from "./components/global/MyHeader";

const darkTheme = createTheme({
  palette: { mode: "dark" } as Palette,
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <MyHeader />
        <CssBaseline enableColorScheme={true} />
        <Example />
        {/* <HeroSection /> */}
        {/* The rest of your application */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
