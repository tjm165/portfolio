import React from "react";
import "./App.css";
import Home from "../components/pages/home";
import { createTheme, Palette, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";

// https://mui.com/material-ui/customization/palette/
const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#ff4400" },
    secondary: { main: "#95B9C7" },
  } as Palette,
});

type PropTypes = {
  view: JSX.Element;
};

function App(props: PropTypes) {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <CssBaseline enableColorScheme={true} />
        {props.view}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
