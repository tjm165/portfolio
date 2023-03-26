import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import myTheme from "./myTheme";

type PropTypes = {
  view: JSX.Element;
};

function App(props: PropTypes) {
  return (
    <React.Fragment>
      <ThemeProvider theme={myTheme}>
        <CssBaseline enableColorScheme={true} />
        {props.view}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
