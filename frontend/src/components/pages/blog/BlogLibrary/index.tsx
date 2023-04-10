import { Outlet } from "react-router-dom";
import BlogCard, { BlogCardProps } from "./BlogCard";

import library from "./library";

type cardInput = {
  title: string;
  path: string;
  description: string;
};

const getCardData = (inputs: cardInput[]) => {
  return inputs.map((input) => {
    return {
      title: input.title,
      description: input.description,
      path: input.path,
    };
  });
};

export default function BlogLibrary() {
  const highlights: {
    title: string;
    description: string;
    path: string;
  }[] = getCardData(library);

  return (
    <>
      <Outlet />

      {highlights.map(({ title, description, path }, i) => (
        <BlogCard key={i} title={title} description={description} path={path} />
      ))}
    </>
  );
}
