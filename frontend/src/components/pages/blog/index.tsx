import { Outlet, useLoaderData } from "react-router-dom";
import BlogCard, { BlogCardProps } from "./BlogCard";
import { SimpleSection } from "../../common/section";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

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
      <Container maxWidth="lg">
        <SimpleSection
          headingText="Wow Tommy has some interesting stuff to say!"
          subHeadingText="From experiences to code snippets this is really exciting to read!"
        >
          <Stack
            direction="row"
            alignItems="flex-start"
            spacing={2}
            flexWrap="wrap"
          >
            {highlights.map(({ title, description, path }, i) => (
              <BlogCard
                key={i}
                title={title}
                description={description}
                path={path}
              />
            ))}
          </Stack>
        </SimpleSection>
      </Container>
    </>
  );
}
