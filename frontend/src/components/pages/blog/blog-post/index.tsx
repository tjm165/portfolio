import { useLoaderData } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";
import { SimpleSection } from "../../../common/section";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function BlogPost() {
  const blog: BlogData = useLoaderData() as BlogData;

  const heading = blog.title;
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  



  | Syntax      | Description |
  | ----------- | ----------- |
  | Header      | Title       |
  | Paragraph   | Text        |

  `;

  return (
    <Container maxWidth="lg">
      <SimpleSection headingText={heading}>
        <Grid>
          <Grid item sm={8}>
            {/* <Box my={2}>{blog.body}</Box> */}
            <ReactMarkdown
              children={markdown}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            />
          </Grid>
        </Grid>
      </SimpleSection>
    </Container>
  );
}

type BlogData = {
  title: string;
  body: string;
};

export async function blogPostLoader({ params }: any) {
  const blogData: BlogData = require(`../posts/${params.blogId}.json`);
  return blogData;
}
