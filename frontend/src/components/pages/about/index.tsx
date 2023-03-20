import { MyLandingContainer } from "../../common";
import { useTitle } from "../../../hooks";
import Timeline from "./timeline";
import FavoriteTech from "../../static/favoriteTech";
import { useTheme } from "@mui/material/styles";
import Page from "../Page";

export default function About() {
  const theme = useTheme();

  return (
    <Page headingText="About Me">
      <MyLandingContainer autoHeight>
        <FavoriteTech />
      </MyLandingContainer>
      <MyLandingContainer autoHeight>
        <Timeline />
      </MyLandingContainer>
    </Page>
  );
}
