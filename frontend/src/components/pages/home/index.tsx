import { MyFavoriteTechSection, MyPathSection } from "../../static";
import Page, { PageSection } from "../Page";
import HomepageHeading from "./WelcomeSection";

// Tommy this is basically a Page
const HomepageLayout = () => {
  const PageSections: PageSection[] = [MyPathSection];

  return (
    <Page
      hasGradient
      transparentHeader
      tabTitle="Home"
      HeroSection={HomepageHeading}
      PageSections={PageSections}
    />
  );
};

export default HomepageLayout;
