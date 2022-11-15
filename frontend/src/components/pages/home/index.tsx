import React from "react";
import { MyLandingContainer } from "../../common";
import { useTheme } from "@mui/material/styles";
import WelcomeSection from "./WelcomeSection";
import TimelineSection from "./TimelineSection";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <WelcomeSection />
      <TimelineSection />

      <MyLandingContainer>
        <div> Hello world?</div>
      </MyLandingContainer>
    </>
  );
}
