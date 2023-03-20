import { MyLandingContainer } from "../../common";
import Timeline from "./timeline";
import FavoriteTech from "../../static/favoriteTech";
import Page from "../Page";

export default function About() {
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
