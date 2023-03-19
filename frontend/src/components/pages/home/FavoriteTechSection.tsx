import React from "react";
import { MyLandingContainer } from "../../common";
import { useTheme } from "@mui/material/styles";
import { SimpleSection } from "../../common/section";
import { FavoriteTech } from "../../static";

export default function FavoriteTechSection() {
  const theme = useTheme();
  return (
    <MyLandingContainer autoHeight color={theme.palette.primary.main}>
      <SimpleSection>
        <FavoriteTech />
      </SimpleSection>
    </MyLandingContainer>
  );
}
