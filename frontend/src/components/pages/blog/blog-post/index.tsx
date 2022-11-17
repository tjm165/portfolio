import { useLoaderData } from "react-router-dom";
import myData from ".././posts/abc.json";

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

export async function blogPostLoader({ params }: any) {
  return myData;
}
