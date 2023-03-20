import React from "react";
import "./App.css";
import { createTheme, Palette, SimplePaletteColorOptions } from "@mui/material";

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

interface ExtraPalette {
  white: string;
  blue: string;
  green: string;
  yellow: string;
  pink: string;
  purple: string;
  graphite: string;
}

// https://coolors.co/90cce9-84f0c3-fff3a8-eec5ca-996cc6
const colors = {
  white: "#ffffff",
  blue: "#6ebdb5",
  green: "#43aa9a",
  yellow: "#e4c3a7",
  pink: "#cdbac2",
  purple: "#bbbacd",
  graphite: "#232021",
};

const headingFontFamily = "monospace";

// https://stackoverflow.com/questions/58168798/add-custom-theme-variable-in-createtheme
declare module "@mui/material/styles" {
  interface CustomTheme {
    extraPalette: {
      white: string;
      blue: string;
      green: string;
      yellow: string;
      pink: string;
      purple: string;
      graphite: string;
    };
  }

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

const myTheme = createTheme({
  typography: {
    fontFamily: "Arial",
    h1: {
      fontFamily: headingFontFamily,
    },
    h2: {
      fontFamily: headingFontFamily,
    },
    h3: {
      fontFamily: headingFontFamily,
    },
    h4: {
      fontFamily: headingFontFamily,
    },
    h5: {
      fontFamily: headingFontFamily,
    },
    h6: {
      fontFamily: headingFontFamily,
    },
  },
  palette: {
    mode: "light",
    primary: { main: colors.blue },
    secondary: { main: colors.green },
    accent: { main: colors.yellow },
  },
  extraPalette: {
    white: colors.white,
    blue: colors.blue,
    green: colors.green,
    yellow: colors.yellow,
    pink: colors.pink,
    purple: colors.purple,
    graphite: colors.graphite,
  },
});

export default myTheme;
