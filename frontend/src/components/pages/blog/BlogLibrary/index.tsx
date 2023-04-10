import { Outlet } from "react-router-dom";
import BlogItem, { BlogItemProps } from "./BlogItem";
import { createMedia } from "@artsy/fresnel";
import { ReactNode } from "react";
import DesktopContainer from "../../../pages/home/DesktopContainer";
import MobileContainer from "../../../pages/home/MobileContainer";
import FooterSection from "../../../pages/home/FooterSection";
import library from "./library";
import { Image as ImageComponent, Item } from "semantic-ui-react";
import Page, { PageSectionPropTypes } from "../../Page";
import { MySection, Types } from "../../../common";

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

const getCardData = (inputs: BlogItemProps[]) => {
  return inputs.map((input) => {
    return {
      title: input.title,
      description: input.description,
      path: input.path,
      image: input.image,
    };
  });
};

function BlogLibrarySection({ color }: PageSectionPropTypes) {
  const highlights: BlogItemProps[] = getCardData(library);
  return (
    <MySection
      color={color}
      headingText="Blog Posts"
      headingTextCenter={Types.Position.CENTER}
    >
      <Item.Group>
        {highlights.map(({ title, description, path, image }, i) => (
          <BlogItem
            key={i}
            title={title}
            description={description}
            path={path}
            image={image}
          />
        ))}
      </Item.Group>
    </MySection>
  );
}

export default function BlogLibrary() {
  const highlights: BlogItemProps[] = getCardData(library);

  return (
    <>
      <Outlet />

      <Page PageSections={[BlogLibrarySection]} />
    </>
  );
}
