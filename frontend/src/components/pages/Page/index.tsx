import { createMedia } from "@artsy/fresnel";
import { ReactNode } from "react";
import { MyFavoriteTechSection, MyPathSection } from "../../static";
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

type Element = ({ color }: ElementPropTypes) => JSX.Element;

type PagePropTypes = {
  Elements: Element[];
};

export type ElementPropTypes = {
  color: string;
};

// TOMMY I really really want to make a type that requires a particular prop to be handled
const Page = ({ Elements }: PagePropTypes) => {
  const colors = [myPalette.specific.white, myPalette.abstract.primary.light];

  return (
    <ResponsiveContainer>
      {Elements.map((Element, index) => (
        <Element key={index} color={colors[index % colors.length]} />
      ))}
      <FooterSection />
    </ResponsiveContainer>
  );
};

export default Page;
