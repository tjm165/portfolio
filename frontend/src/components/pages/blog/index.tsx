import { Outlet } from "react-router-dom";
import BlogCard, { BlogCardProps } from "./BlogCard";
// import { Align } from "../../common/section";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { consts } from "../../common";
import catalogue from "./catalogue";
import Page from "../Page";
import { MyLandingContainer } from "../../common";

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
      <Page headingText="Blog">
        <MyLandingContainer autoHeight>
          <Container maxWidth="md">
            <Grid container justifyContent={"space-evenly"} spacing={4}>
              {highlights.map(
                ({ title, description, path, image, bgcolor }, i) => (
                  <Grid key={i} item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <BlogCard
                      title={title}
                      description={description}
                      path={path}
                      image={image || undefined}
                      bgcolor={bgcolor}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Container>
        </MyLandingContainer>
      </Page>
    </>
  );
}
