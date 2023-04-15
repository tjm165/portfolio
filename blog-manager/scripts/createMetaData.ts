const fs = require("fs").promises;
const path = require("path");

type ResultObj = {
  path: string;
  numCharacters: number;
  title: string;
};

type MetadataObj = {
  title: string;
};

function isMetadata(obj: unknown): obj is MetadataObj {
  return typeof obj === "object" && obj !== null && "title" in obj;
}

const basePath = "./blog/posts";

async function readDirectories(): Promise<string[]> {
  const files = await fs.readdir(basePath, { withFileTypes: true });
  const directories: string[] = [];
  for (const dirent of files) {
    if (dirent.isDirectory()) {
      directories.push(dirent.name);
    }
  }
  return directories;
}

async function readPostFile(dir: string): Promise<ResultObj> {
  const filePath = path.join(basePath, dir, "body.md");
  const data = await fs.readFile(filePath, "utf8");
  const numCharacters = data.length;

  const metadataPath = path.join(basePath, dir, "metadata.json");
  const metadata = await fs.readFile(metadataPath, "utf8");
  const metadataObj = JSON.parse(metadata);

  if (!isMetadata(metadataObj)) {
    throw new Error(`Invalid metadata format for ${dir}`);
  }

  const resultObj: ResultObj = {
    path: dir,
    numCharacters,
    ...metadataObj,
  };

  return resultObj;
}

async function writeResultsToFile(results: ResultObj[]): Promise<void> {
  const outputFilePath = path.join(basePath, "metadata.json");
  const jsonData = JSON.stringify(results, null, 2);
  await fs.writeFile(outputFilePath, jsonData);
  console.log(`Results written to ${outputFilePath}`);
}

async function main(): Promise<void> {
  const directories = await readDirectories();
  const results: ResultObj[] = [];

  for (const dir of directories) {
    const resultObj = await readPostFile(dir);
    results.push(resultObj);
  }

  await writeResultsToFile(results);
}

main();
