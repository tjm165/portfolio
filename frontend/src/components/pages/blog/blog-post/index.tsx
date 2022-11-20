import { useLoaderData } from "react-router-dom";
import { Paper, Container, Grid, Box, Hidden } from "@mui/material";
import { SimpleSection } from "../../../common/section";

export default function BlogPost() {
  const blog: BlogData = useLoaderData() as BlogData;

  const heading = blog.title;

  const overlayStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  };

  return (
    <Container maxWidth="md">
      <SimpleSection headingText={heading}>
        <Grid>
          <Grid item sm={8}>
            <Box my={2}>
              {" "}
              <div>
                this is my content this is my content this is my content this is
                my content this is my content this is my content this is my
                content this is my contentthis is my contentthis is my
                contentthis is my contentthis is my contentthis is my
                contentthis is my contentthis is my contentthis is my
                contentthis is my contentthis is my contentthis is my content
              </div>
            </Box>
          </Grid>
        </Grid>
      </SimpleSection>
    </Container>
  );
}

type BlogData = {
  title: string;
};

export async function blogPostLoader({ params }: any) {
  const blogData: BlogData = require(`../posts/${params.blogId}.json`);
  return blogData;
}
