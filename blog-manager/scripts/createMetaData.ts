import { isMetadata, isResultObj, ResultObj } from "../types";

const fs = require("fs").promises;
const path = require("path");

const basePath = "./blog/posts";
const imageSuffix = "image.png";
const bodySuffix = "body.md";
const metadataSuffix = "metadata.json";
const draftMode = true;

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

type BlankObj = {};

async function readPostFile(dir: string): Promise<ResultObj | BlankObj> {
  const metadataPath = path.join(basePath, dir, metadataSuffix);
  const metadata = await fs.readFile(metadataPath, "utf8");
  const metadataObj = JSON.parse(metadata);

  if (!isMetadata(metadataObj)) {
    throw new Error(`Invalid metadata format for ${dir}`);
  }

  if (metadataObj.draftMode && !draftMode) {
    return {};
  }

  const filePath = path.join(basePath, dir, bodySuffix);
  const data = await fs.readFile(filePath, "utf8");
  const numCharacters = data.length;

  const resultObj: ResultObj = {
    path: dir,
    numCharacters,
    ...metadataObj,
  };

  const imagePath = path.join(basePath, dir, imageSuffix);
  try {
    const imageStats = await fs.stat(imagePath);
    if (imageStats.isFile()) {
      resultObj.image = imageSuffix;
    }
  } catch (err) {}

  return resultObj;
}

async function writeResultsToFile(results: ResultObj[]): Promise<void> {
  const outputFilePath = path.join("metadata.json");
  const jsonData = JSON.stringify(results, null, 2);
  await fs.writeFile(outputFilePath, jsonData);
  console.log(`Results written to ${outputFilePath}`);
}

async function main(): Promise<void> {
  const directories = await readDirectories();
  const results: ResultObj[] = [];

  for (const dir of directories) {
    const resultObj = await readPostFile(dir);
    if (isResultObj(resultObj)) {
      results.push(resultObj);
    }
  }

  await writeResultsToFile(results);
}

main();
