import React from "react";
import { MyLandingContainer } from "../../common";
import { useTheme } from "@mui/material/styles";

export default function TimelineSection() {
  const theme = useTheme();
  return (
    <MyLandingContainer color={theme.palette.secondary.main}>
      <div> Timeline?</div>
    </MyLandingContainer>
  );
}
