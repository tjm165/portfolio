import React from "react";
import "./App.css";
import Home from "../components/pages/home";
import { createTheme, Palette, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";

const darkTheme = createTheme({
  palette: { mode: "dark" } as Palette,
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <CssBaseline enableColorScheme={true} />
        <Home />
        {/* <HeroSection /> */}
        {/* The rest of your application */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
