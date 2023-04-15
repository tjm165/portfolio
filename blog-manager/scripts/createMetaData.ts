import * as fs from "fs";

// Path to the directory containing the blog posts
const postsDirectory = "blog/posts";

function fileManagement() {
  const metadata = [];
  // @ts-ignore
  fs.readdir(postsDirectory, (err, files) => {
    metadata.push("blog");
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
          const blog = {
            title: "My Title",
            path: file,
            numCharacters,
            description: "Hey this is my first blog!",
            image: "https://picsum.photos/300/300",
          };
          console.log("a", blog);
          metadata.push(blog);
          console.log("b", metadata);
        });
      }
    });

    console.log(metadata);

    fs.writeFile("example.txt", JSON.stringify(metadata), (err) => {
      if (err) throw err;
      console.log("Data written to file");
    });
  });
}

async function main() {
  // Read the contents of the posts directory

  console.log("Starting meta data");
  const m = await fileManagement();
}

main().then();

// ts-node -e "import main from 'blog-manager/scripts/createMetaData.ts'; (async () => { await main(); })();"
