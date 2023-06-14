import { createMedia } from "@artsy/fresnel";
import { ReactNode } from "react";
import { myPalette } from "../../../App/myTheme";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import FooterSection from "./FooterSection";
import { useTitle } from "../../../hooks";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

type ResponsiveContainerPropTypes = {
  children: ReactNode;
  transparent?: boolean;
};

const ResponsiveContainer = ({
  children,
  transparent,
}: ResponsiveContainerPropTypes) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <Media greaterThan="mobile">
      {/* @ts-ignore need to convert to functional */}
      <DesktopContainer transparent={transparent}>{children}</DesktopContainer>
    </Media>

    <Media at="mobile">
      {/* @ts-ignore need to convert to functional */}
      <MobileContainer transparent={transparent}>{children}</MobileContainer>
    </Media>
  </MediaContextProvider>
);

export interface PageSectionPropTypes {
  color: string;
}

export type PageSection = ({ color }: PageSectionPropTypes) => JSX.Element;

export type HeroSection = () => JSX.Element;

type PagePropTypes = {
  HeroSection?: HeroSection;
  PageSections?: PageSection[];
  hasGradient?: boolean;
  transparentHeader?: boolean;
  tabTitle: string;
};

const Page = ({
  HeroSection,
  PageSections,
  hasGradient,
  transparentHeader,
  tabTitle,
}: PagePropTypes) => {
  const colors = [myPalette.specific.white, myPalette.abstract.primary.light];

  useTitle(tabTitle);

  return (
    <div className={hasGradient ? "Gradient" : ""}>
      <ResponsiveContainer transparent={transparentHeader}>
        <span
          style={{
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {HeroSection && <HeroSection />}
          {PageSections?.map((PageSection, index) => (
            <PageSection key={index} color={colors[index % colors.length]} />
          ))}
        </span>

        <FooterSection />
      </ResponsiveContainer>
    </div>
  );
};

export default Page;
