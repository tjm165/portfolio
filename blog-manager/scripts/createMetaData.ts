import * as fs from "fs";

// Path to the directory containing the blog posts
const postsDirectory = "blog/posts";

async function fileManagement() {
  const metadata = [];
  // @ts-ignore
  fs.readdir(postsDirectory, async (err, files) => {
    metadata.push("blog");
    if (err) {
      console.log(err);
      return;
    }

    // Iterate over each file in the directory
    const promises = files.map((file) => {
      return new Promise(() => {
        metadata.push("2");
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

            fs.writeFile(
              "example.txt",
              JSON.stringify(blog) + " \n",
              { flag: "a" },
              (err) => {
                if (err) throw err;
                console.log("Data written to file");
              }
            );
          });
        }
      });
    });

    Promise.all(promises).then(() => {
      console.log("c", metadata);
    });

    console.log("c", metadata);
  });
}

async function main() {
  // Read the contents of the posts directory

  console.log("Starting meta data");
  fs.writeFile("example.txt", "", (err) => {
    if (err) throw err;
    console.log("File cleared");
  });
  const m = await fileManagement();
}

main().then();

// ts-node -e "import main from 'blog-manager/scripts/createMetaData.ts'; (async () => { await main(); })();"
