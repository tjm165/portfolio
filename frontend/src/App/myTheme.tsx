import React from "react";
import "./App.css";

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

// https://coolors.co/66b8e1-dceff9-84f0c3-fff3a8-eec5ca-996cc6-232021
const colors = {
  white: "#ffffff",
  blue: "#66b8e1",
  lightBlue: "#aad7ee",
  green: "#84f0c3",
  yellow: "#fff3a8",
  pink: "#eec5ca",
  purple: "#996cc6",
  graphite: "#232021",
};

export const myPalette = {
  abstract: {
    mode: "light",
    primary: { main: colors.blue, light: colors.lightBlue },
    secondary: { main: colors.green },
    accent: { main: colors.yellow },
  },
  specific: {
    white: colors.white,
    pink: colors.pink,
    purple: colors.purple,
    graphite: colors.graphite,
  },
};
