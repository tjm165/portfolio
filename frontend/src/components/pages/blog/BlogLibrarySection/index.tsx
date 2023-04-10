import BlogItem, { BlogItemProps } from "./BlogItem";
import library from "./library";
import { Item } from "semantic-ui-react";
import { PageSectionPropTypes } from "../../Page";
import { MySection, Types } from "../../../common";

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

export default function BlogLibrarySection({ color }: PageSectionPropTypes) {
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
