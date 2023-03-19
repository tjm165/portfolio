import React from "react";
import { useTheme } from "@mui/material/styles";
import WelcomeSection from "./WelcomeSection";
import FavoriteTechSection from "./FavoriteTechSection";
import { Outlet } from "react-router-dom";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Outlet />
      <WelcomeSection />
      <FavoriteTechSection />
    </>
  );
}
