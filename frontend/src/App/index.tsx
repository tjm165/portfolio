import React from "react";
import "./App.css";
import Home from "../components/pages/home";
import { createTheme, Palette, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import myTheme from "./myTheme";

type PropTypes = {
  view: JSX.Element;
};

function App(props: PropTypes) {
  return (
    <React.Fragment>
      <ThemeProvider theme={myTheme}>
        <Header />
        <CssBaseline enableColorScheme={true} />
        {props.view}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
