import { useLoaderData } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";
import { Align, SimpleSection } from "../../../common/section";
import MuiMarkdown from "mui-markdown";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const blog: BlogData = useLoaderData() as BlogData;
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function fetchMarkdown() {
      const heading = blog.title;
      const static_media_path = require("../posts/e.md");
      const response = await fetch(static_media_path);
      const markdown = await response.text();
      setMarkdown(markdown);
    }
    fetchMarkdown();
  }, []);

  return (
    <Container maxWidth="lg">
      <SimpleSection headingText={blog.title} alignHeading={Align.LEFT}>
        <Grid>
          <Grid item sm={8}>
            <MuiMarkdown>{markdown}</MuiMarkdown>
          </Grid>
        </Grid>
      </SimpleSection>
    </Container>
  );
}

type BlogData = {
  title: string;
  body: string;
};

export async function blogPostLoader({ params }: any) {
  const blogData: BlogData = require(`../posts/${params.blogId}.json`);
  return blogData;
}
