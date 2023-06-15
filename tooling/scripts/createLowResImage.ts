import Jimp from "jimp";
// const Jimp = require("jimp");

async function createLowResImage(
  imagePath: string,
  outputPath: string,
  scaleFactor: number
): Promise<void> {
  try {
    // Load the original image
    const image = await Jimp.read(imagePath);

    // Calculate the new dimensions for the low-resolution image
    const { width, height } = image.bitmap;
    const newWidth = Math.floor(width / scaleFactor);
    const newHeight = Math.floor(height / scaleFactor);

    // Resize the image to the new dimensions
    image.resize(newWidth, newHeight);

    // Save the low-resolution image
    await image.writeAsync(outputPath);

    console.log("Low-resolution image created successfully!");
  } catch (error) {
    console.error("Error creating low-resolution image:", error);
  }
}

// Usage example
const imagePath = "../frontend/src/moawad.png";
const outputPath = "../frontend/src/moawad-low-res.png";
const scaleFactor = 10; // Set the desired scale factor

createLowResImage(imagePath, outputPath, scaleFactor);
