console.log("Starting meta data");

import * as fs from "fs";

// Path to the directory containing the blog posts
const postsDirectory = "blog/posts";

// Read the contents of the posts directory
fs.readdir(postsDirectory, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  // Iterate over each file in the directory
  files.forEach((file) => {
    // Check if the file is a directory
    if (fs.statSync(`${postsDirectory}/${file}`).isDirectory()) {
      // If it is a directory, print the name
      console.log(file);
    }
  });
});
