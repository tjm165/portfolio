import React from "react";
import { useTheme } from "@mui/material/styles";
import WelcomeSection from "./WelcomeSection";
import FavoriteTech from "../../static/favoriteTech";
import { Outlet } from "react-router-dom";
import { MyLandingContainer } from "../../common";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Outlet />
      <WelcomeSection />
      <MyLandingContainer autoHeight color={theme.palette.primary.main}>
        <FavoriteTech />
      </MyLandingContainer>
    </>
  );
}
