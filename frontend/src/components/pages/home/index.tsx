import React from "react";
import { MyLandingContainer } from "../../common";
import { useTheme } from "@mui/material/styles";
import WelcomeSection from "./WelcomeSection";
import TimelineSection from "./TimelineSection";
import { Outlet } from "react-router-dom";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Outlet />
      <WelcomeSection />
      <TimelineSection />
    </>
  );
}
