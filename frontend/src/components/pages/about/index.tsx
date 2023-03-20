import { MyLandingContainer } from "../../common";
import { useTitle } from "../../../hooks";
import Timeline from "./timeline";
import FavoriteTechSection from "../../static/favoriteTech/realIndex";
import { useTheme } from "@mui/material/styles";
import Page from "../Page";

export default function About() {
  const theme = useTheme();

  return (
    <Page headingText="About Me">
      <FavoriteTechSection />
      <MyLandingContainer autoHeight color={theme.palette.primary.main}>
        <Timeline />
      </MyLandingContainer>
    </Page>
  );
}
