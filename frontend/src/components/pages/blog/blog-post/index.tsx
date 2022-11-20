import { useLoaderData } from "react-router-dom";

export default function BlogPost() {
  const blog = useLoaderData();

  return (
    <div>
      {/* @ts-ignore */}
      {(blog && blog.title) || "No blog"}
      Just give me json Title Date Paragraphs: string | JSX.Element
    </div>
  );
}

type BlogPostParams = {
  blogId: string;
};

export async function blogPostLoader({ params }: any) {
  const blogData = require(`../posts/${params.blogId}.json`);
  return blogData;
}
