import HeadingSection from "./HeadingSection";
import { Outlet, useLoaderData } from "react-router-dom";
import BlogCard, { BlogCardProps } from "./BlogCard";

export default function Blog() {
  const highlights: BlogCardProps[] = [
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
  ];

  return (
    <>
      <Outlet />
      <HeadingSection />
      {highlights.map(({ title, description, path }, i) => (
        <BlogCard key={i} title={title} description={description} path={path} />
      ))}
    </>
  );
}
