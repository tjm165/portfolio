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
  const metadata_response = await fetch(
    `https://d307urd3htsez.cloudfront.net/portfolio/blog/posts/${params.blogId}/metadata.json`
  );
  const metadata = await metadata_response.json();

  const body_response = await fetch(
    `https://d307urd3htsez.cloudfront.net/portfolio/blog/posts/${params.blogId}/body.md`
  );

  const body = await body_response.text();

  return { body, metadata };
}
