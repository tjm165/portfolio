import { useLoaderData } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";
import { Align, SimpleSection } from "../../common/section";
import MuiMarkdown from "mui-markdown";

export default function BlogPost() {
  const blog: BlogData = useLoaderData() as BlogData;

  return (
    <Container maxWidth="lg">
      <SimpleSection
        headingText={blog.metadata.title}
        alignHeading={Align.LEFT}
      >
        <Grid>
          <Grid item sm={8}>
            <MuiMarkdown>{blog.body}</MuiMarkdown>
          </Grid>
        </Grid>
      </SimpleSection>
    </Container>
  );
}

type BlogData = {
  metadata: { title: string };
  body: string;
};

export async function blogPostLoader({ params }: any) {
  const metadata = require(`./posts/${params.blogId}/metadata.json`);

  const static_media_path = require(`./posts/${params.blogId}/body.md`);
  // const body_response = await fetch(static_media_path);
  // const body = await body_response.text();

  console.log(static_media_path);

  return { body: "body", metadata };
}
