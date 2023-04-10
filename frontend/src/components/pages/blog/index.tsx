import { Outlet } from "react-router-dom";
import BlogCard, { BlogCardProps } from "./BlogCard";

import { consts } from "../../common";
import catalogue from "./catalogue";

type cardInput = {
  title: string;
  path: string;
  bgcolor: string;
  description: string;
};

const getCardData = (inputs: cardInput[]) => {
  return inputs.map((input) => {
    return {
      title: input.title,
      description: input.description,
      path: input.path,
      bgcolor: input.bgcolor,
      image: `${consts.cdnBlogPosts}/${input.path}/${consts.cdnBlogImageSuffix}`,
    };
  });
};

export default function Blog() {
  const highlights: {
    title: string;
    description: string;
    path: string;
    image?: string;
    bgcolor: string;
  }[] = getCardData(catalogue);

  return (
    <>
      <Outlet />

      {highlights.map(({ title, description, path, image, bgcolor }, i) => (
        <BlogCard
          key={i}
          title={title}
          description={description}
          path={path}
          image={image || undefined}
          bgcolor={bgcolor}
        />
      ))}
    </>
  );
}
