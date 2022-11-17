import React from "react";
import "./App.css";
import { createTheme, Palette } from "@mui/material";

// https://coolors.co/89ae82-ddf0ff-7c809b
// https://mui.com/material-ui/customization/palette/

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

const myTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#89ae82" },
    secondary: { main: "#ddf0ff" },
    accent: { main: "#7C809B" },
  } as Palette,
});

export default myTheme;
