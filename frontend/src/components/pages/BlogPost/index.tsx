import { useLoaderData } from "react-router-dom";
import MuiMarkdown from "mui-markdown";
import { consts, MySection, Types } from "../../common";
import Page, { PageSectionPropTypes } from "../Page";

function BlogSection({ color }: PageSectionPropTypes) {
  const blog: BlogData = useLoaderData() as BlogData;

  return (
    <MySection
      color={color}
      headingText="Blog Posts"
      headingTextCenter={Types.Position.LEFT}
    >
      <MuiMarkdown>{blog.body}</MuiMarkdown>
    </MySection>
  );
}

export default function BlogPost() {
  return <Page PageSections={[BlogSection]} />;
}

type BlogData = {
  metadata: { title: string };
  body: string;
};

export async function blogPostLoader({ params }: any) {
  const draftMode = true;

  let root = consts.cdnBlogPosts;
  if (draftMode) {
    root = "http://localhost:4566/tommy/blog/posts";
  }

  const metadata_response = await fetch(
    `${root}/${params.blogId}/${consts.cdnBlogMetadataSuffix}`
  );

  const metadata = await metadata_response.text();

  console.log(metadata);

  console.log(metadata);

  const body_response = await fetch(
    `${root}/${params.blogId}/${consts.cdnBlogBodySuffix}`
  );

  const body = await body_response.text();
  console.log(body);

  return { body, metadata };
}
