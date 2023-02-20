import React from "react";
import { MyLandingContainer } from "../../common";
import { useTheme } from "@mui/material/styles";
import { SimpleSection } from "../../common/section";
import { Align } from "../../common/section/SimpleSection";

export default function TimelineSection() {
  const theme = useTheme();
  return (
    <MyLandingContainer color={theme.palette.primary.main}>
      <SimpleSection headingText="My Next Section" alignHeading={Align.CENTER}>
        <div>I should honestly probably have about and then projects</div>
      </SimpleSection>
    </MyLandingContainer>
  );
}
