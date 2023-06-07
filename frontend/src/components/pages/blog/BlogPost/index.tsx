import { useLoaderData } from "react-router-dom";
import MuiMarkdown from "mui-markdown";
import { consts, MySection, Types } from "../../../common";
import Page, { PageSectionPropTypes } from "../../Page";

function BlogSection({ color }: PageSectionPropTypes) {
  const blog: BlogData = useLoaderData() as BlogData;

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

export default function BlogPost() {
  return <Page PageSections={[BlogSection]} />;
}

type BlogData = {
  metadata: { title: string };
  body: string;
};

export async function blogPostLoader({ params }: any) {
  const metadata_response = await fetch(
    `${consts.cdnBlogPosts}/${params.blogId}/${consts.cdnBlogMetadataSuffix}`
  );
  const metadata = await metadata_response.json();

  const body_response = await fetch(
    `${consts.cdnBlogPosts}/${params.blogId}/${consts.cdnBlogBodySuffix}`
  );

  const body = await body_response.text();

  return { body, metadata };
}
