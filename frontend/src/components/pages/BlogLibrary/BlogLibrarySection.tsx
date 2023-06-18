import BlogItem, { BlogItemProps } from "./BlogItem";
import library from "./library";
import { Item } from "semantic-ui-react";
import { PageSectionPropTypes } from "../Page";
import { consts, MySection, Types } from "../../common";
import config from "../../../config";
import { ResultObj } from "@tommy/types";

const getCardData = (inputs: BlogItemProps[]) => {
  return inputs.map((input) => {
    return {
      ...input,
    };
  });
};

function shouldShowBlogPost(blog: ResultObj): boolean {
  if (window.location.origin.includes("localhost")) {
    return true;
  }
  if (blog.draftMode && !window.location.origin.includes("localhost")) {
    return true;
  }
  return false;
}

export default function BlogLibrarySection({ color }: PageSectionPropTypes) {
  const highlights: BlogItemProps[] = getCardData(library);
  let draftMode = config.DRAFT_MODE;

  let root = consts.cdnBlogPosts;

  if (draftMode) {
    root = "http://localhost:4566/tommy/portfolio/blog/posts";
  }

  console.log(draftMode);

  return (
    <MySection
      color={color}
      headingText="Blog Posts"
      headingTextCenter={Types.Position.LEFT}
    >
      <Item.Group relaxed>
        {highlights
          .filter((h) => shouldShowBlogPost(h))
          .map((h, i) => (
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
