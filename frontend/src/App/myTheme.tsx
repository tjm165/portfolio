import "./App.css";

// https://coolors.co/66b8e1-aad7ee-84f0c3-fff3a8-eec5ca-996cc6-232021
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
