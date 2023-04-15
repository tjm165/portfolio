import * as fs from "fs";

// Path to the directory containing the blog posts
const postsDirectory = "blog/posts";

function fileManagement() {
  const metadata = [];
  let x = 1;
  // @ts-ignore
  fs.readdir(postsDirectory, (err, files) => {
    metadata.push("blog");
    x += 1;
    if (err) {
      console.log(err);
      return;
    }

    // Iterate over each file in the directory
    files.forEach((file) => {
      metadata.push("1");
      // Check if the file is a directory
      if (fs.statSync(`${postsDirectory}/${file}`).isDirectory()) {
        let blog = {};

        const filePath = `${postsDirectory}/${file}/body.md`;

        // Read the contents of the file
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            console.error(err);
            return;
          }

          // Count the number of characters in the file
          const numCharacters = data.length;
          blog = {
            title: "My Title",
            path: file,
            numCharacters,
            description: "Hey this is my first blog!",
            image: "https://picsum.photos/300/300",
          };
          console.log(blog);
          metadata.push(blog);
        });
      }
    });
  });

  return x;
}

async function main() {
  // Read the contents of the posts directory

  console.log("Starting meta data");
  const m = await fileManagement();

  console.log("***");
  console.log(m);
}

main();
