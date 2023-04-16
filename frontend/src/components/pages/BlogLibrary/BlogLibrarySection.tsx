import BlogItem, { BlogItemProps } from "./BlogItem";
import library from "./library";
import { Item } from "semantic-ui-react";
import { PageSectionPropTypes } from "../Page";
import { consts, MySection, Types } from "../../common";

const getCardData = (inputs: BlogItemProps[]) => {
  return inputs.map((input) => {
    return {
      ...input,
    };
  });
};

export default function BlogLibrarySection({ color }: PageSectionPropTypes) {
  const highlights: BlogItemProps[] = getCardData(library);
  const draftMode = true;
  let root = consts.cdnBlogPosts;

  if (draftMode) {
    root = "http://localhost:4566/tommy/portfolio/blog/posts";
  }

  return (
    <MySection
      color={color}
      headingText="Blog Posts"
      headingTextCenter={Types.Position.LEFT}
    >
      <Item.Group relaxed>
        {highlights.map((h, i) => (
          <BlogItem
            key={i}
            {...h}
            image={h.image && `${root}/${h.path}/${h.image}`}
          />
        ))}
      </Item.Group>
    </MySection>
  );
}
