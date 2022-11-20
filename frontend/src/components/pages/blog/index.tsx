import { Outlet, useLoaderData } from "react-router-dom";
import BlogCard, { BlogCardProps } from "./BlogCard";
import { SimpleSection } from "../../common/section";
import Container from "@mui/material/Container";

export default function Blog() {
  const highlights: BlogCardProps[] = [
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
    {
      title: "My first blog",
      description: "my description",
      path: "abc",
    },
  ];

  return (
    <>
      <Outlet />
      <Container maxWidth="md">
        <SimpleSection
          headingText="Wow Tommy have some interesting stuff to say!"
          subHeadingText="From experiences to code snippets this is really exciting to read!"
        >
          <>
            {highlights.map(({ title, description, path }, i) => (
              <BlogCard
                key={i}
                title={title}
                description={description}
                path={path}
              />
            ))}
          </>
        </SimpleSection>
      </Container>
    </>
  );
}
