import { useLoaderData } from "react-router-dom";
import MuiMarkdown from "mui-markdown";
import { consts, MySection, Types } from "../../common";
import Page, { PageSectionPropTypes } from "../Page";
import config from "../../../config";

export default function BlogPost() {
  const blog: BlogData = useLoaderData() as BlogData;

  function BlogSection({ color }: PageSectionPropTypes) {
    return (
      <MySection
        color={color}
        headingText={blog.metadata.title}
        headingTextCenter={Types.Position.LEFT}
      >
        <MuiMarkdown>{blog.body}</MuiMarkdown>
      </MySection>
    );
  }

  return <Page tabTitle={blog.metadata.title} PageSections={[BlogSection]} />;
}

type BlogData = {
  metadata: { title: string };
  body: string;
};

export async function blogPostLoader({ params }: any) {
  let draftMode = config.DRAFT_MODE;

  let root = consts.cdnBlogPosts;

  console.log(draftMode);

  if (draftMode) {
    root = "http://localhost:4566/tommy/portfolio/blog/posts";
  }

  const metadata_response = await fetch(
    `${root}/${params.blogId}/${consts.cdnBlogMetadataSuffix}`
  );

  const metadata = await metadata_response.json();

  console.log(metadata);

  console.log(metadata);

  const body_response = await fetch(
    `${root}/${params.blogId}/${consts.cdnBlogBodySuffix}`
  );

  const body = await body_response.text();
  console.log(body);

  return { body, metadata };
}
