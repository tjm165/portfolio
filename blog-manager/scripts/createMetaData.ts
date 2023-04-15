const fs = require("fs");
const path = require("path");

const basePath = "./blog/posts";

fs.readdir(basePath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const directories = files
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const results = [];

  directories.forEach((dir) => {
    const filePath = path.join(basePath, dir, "body.md");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const numChars = data.length;
      results.push({ [dir]: numChars });

      if (results.length === directories.length) {
        const outputFilePath = path.join(basePath, "metadata.json");
        const jsonData = JSON.stringify(results, null, 2);
        fs.writeFile(outputFilePath, jsonData, (err) => {
          if (err) {
            console.error(err);
            return;
          }

          console.log(`Results written to ${outputFilePath}`);
        });
      }
    });
  });
});
