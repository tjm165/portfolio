import { MyLandingContainer } from "../../common";
import Timeline from "./timeline";
import FavoriteTech from "../../static/favoriteTech";
import { useTheme } from "@mui/material/styles";
import Page from "../Page";

export default function About() {
  const theme = useTheme();

  return (
    <Page headingText="About Me">
      <MyLandingContainer autoHeight subHeadingText="My Favorite Tech">
        <FavoriteTech />
      </MyLandingContainer>
      <MyLandingContainer autoHeight subHeadingText="Career Timeline">
        <Timeline />
      </MyLandingContainer>
    </Page>
  );
}
