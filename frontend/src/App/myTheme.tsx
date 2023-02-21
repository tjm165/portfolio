import React from "react";
import "./App.css";
import { createTheme, Palette, PaletteColor } from "@mui/material";

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

interface MyPalette extends Palette {
  blue: PaletteColor;
  green: PaletteColor;
  yellow: PaletteColor;
  pink: PaletteColor;
  purple: PaletteColor;
  graphite: PaletteColor;
}

// https://coolors.co/90cce9-84f0c3-fff3a8-eec5ca-996cc6
const colors = {
  blue: "#a6cace",
  green: "#43aa9a",
  yellow: "#e4c3a7",
  pink: "#cdbac2",
  purple: "#bbbacd",
  graphite: "#232021",
};

const myTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.blue },
    secondary: { main: colors.green },
    accent: { main: colors.yellow },
    blue: { main: colors.blue },
    green: { main: colors.green },
    yellow: { main: colors.yellow },
    pink: { main: colors.pink },
    purple: { main: colors.purple },
    graphite: { main: colors.graphite },
  } as MyPalette,
});

export default myTheme;
