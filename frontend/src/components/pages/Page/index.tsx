import { createMedia } from "@artsy/fresnel";
import { ReactNode } from "react";
import { myPalette } from "../../../App/myTheme";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import FooterSection from "./FooterSection";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

type ResponsiveContainerPropTypes = {
  children: ReactNode;
};

const ResponsiveContainer = ({ children }: ResponsiveContainerPropTypes) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <Media greaterThan="mobile">
      <DesktopContainer>{children}</DesktopContainer>
    </Media>

    <Media at="mobile">
      <MobileContainer>{children}</MobileContainer>
    </Media>
  </MediaContextProvider>
);

export interface PageSectionPropTypes {
  color: string;
  [prop: string]: any;
}

export type PageSection = ({
  color,
  ...rest
}: PageSectionPropTypes) => JSX.Element;

type PagePropTypes = {
  PageSections: PageSection[];
};

const Page = ({ PageSections }: PagePropTypes) => {
  const colors = [myPalette.specific.white, myPalette.abstract.primary.light];

  return (
    <ResponsiveContainer>
      {PageSections.map((PageSection, index) => (
        <PageSection key={index} color={colors[index % colors.length]} />
      ))}
      <FooterSection />
    </ResponsiveContainer>
  );
};

export default Page;
