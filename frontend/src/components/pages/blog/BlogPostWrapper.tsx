import { useLoaderData } from "react-router-dom";
import MuiMarkdown from "mui-markdown";
import { consts } from "../../common";

export default function BlogPost() {
  const blog: BlogData = useLoaderData() as BlogData;

  return <MuiMarkdown>{blog.body}</MuiMarkdown>;
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
