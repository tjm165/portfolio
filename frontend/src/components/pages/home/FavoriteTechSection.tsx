import React from "react";
import { MyLandingContainer } from "../../common";
import { useTheme } from "@mui/material/styles";
import { Align, SimpleSection } from "../../common/section";
import { FavoriteTech } from "../../static";

export default function FavoriteTechSection() {
  const theme = useTheme();
  return (
    <MyLandingContainer autoHeight color={theme.palette.primary.main}>
      <SimpleSection
        alignHeading={Align.CENTER}
        subHeadingText="What tech do I like?"
      >
        <FavoriteTech />
      </SimpleSection>
    </MyLandingContainer>
  );
}
