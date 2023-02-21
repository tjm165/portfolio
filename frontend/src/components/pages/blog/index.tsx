import { Outlet } from "react-router-dom";
import BlogCard, { BlogCardProps } from "./BlogCard";
import { SimpleSection, Align } from "../../common/section";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Blog() {
  const highlights: {
    title: string;
    description: string;
    path: string;
    image?: string;
  }[] = [
    {
      title: "All about React",
      description: "React is great!",
      path: "abc",
      image:
        "https://d307urd3htsez.cloudfront.net/portfolio/blog/react-icon.png",
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
        <SimpleSection headingText="Blog" alignHeading={Align.CENTER}>
          <Grid container justifyContent={"space-evenly"} spacing={4}>
            {highlights.map(({ title, description, path, image }, i) => (
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <BlogCard
                  key={i}
                  title={title}
                  description={description}
                  path={path}
                  isLeft={i % 2 == 0}
                  image={image || undefined}
                />
              </Grid>
            ))}
          </Grid>
        </SimpleSection>
      </Container>
    </>
  );
}
