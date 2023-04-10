import { MyFavoriteTechSection, MyPathSection } from "../../static";
import Page, { PageSection } from "../Page";
import HomepageHeading from "./Welcome";

// Tommy this is basically a Page
const HomepageLayout = () => {
  const Elements: PageSection[] = [
    HomepageHeading,
    MyFavoriteTechSection,
    MyPathSection,
  ];

  return <Page PageSections={Elements} />;
};

export default HomepageLayout;
