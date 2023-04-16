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

  if (!draftMode) {
    const root = consts.cdnBlogPosts;

    const metadata_response = await fetch(
      `${root}/${params.blogId}/${consts.cdnBlogMetadataSuffix}`
    );
    const metadata = await metadata_response.json();

    const body_response = await fetch(
      `${root}/${params.blogId}/${consts.cdnBlogBodySuffix}`
    );

    const body = await body_response.text();

    return { body, metadata };
  }

  const root = "/Users/tommymoawad/Coding/portfolio/blog-manager/blog/posts";

  const metadata = require(`${root}/${params.blogId}/${consts.cdnBlogMetadataSuffix}`);

  const body =
    await require(`${root}/${params.blogId}/${consts.cdnBlogBodySuffix}`);

  return { body, metadata };
}
