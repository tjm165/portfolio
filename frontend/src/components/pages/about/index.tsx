import { MyLandingContainer } from "../../common";
import CareerTimeline from "../../static/careerTimeline";
import FavoriteTech from "../../static/favoriteTech";
import Page from "../Page";

export default function About() {
  return (
    <Page headingText="About Me">
      <MyLandingContainer autoHeight subHeadingText="My Favorite Tech">
        <FavoriteTech />
      </MyLandingContainer>
      <MyLandingContainer autoHeight subHeadingText="My Path">
        <CareerTimeline />
      </MyLandingContainer>
    </Page>
  );
}
