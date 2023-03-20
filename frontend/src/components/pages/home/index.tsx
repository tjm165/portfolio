import React from "react";
import { useTheme } from "@mui/material/styles";
import WelcomeSection from "./WelcomeSection";
import FavoriteTech from "../../static/favoriteTech";
import { Outlet } from "react-router-dom";
import { MyLandingContainer } from "../../common";
import { Align } from "../../common/section";
import Page from "../Page";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Outlet />
      <Page>
        <WelcomeSection />
        <MyLandingContainer
          alignHeading={Align.CENTER}
          subHeadingText="My Favorite Tech"
          autoHeight
        >
          <FavoriteTech />
        </MyLandingContainer>
      </Page>
    </>
  );
}
