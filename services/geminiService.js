const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const { geminiApiKey } = require("../config/env");

const genAI = new GoogleGenerativeAI(geminiApiKey);

async function modifyImage(prompt, imagePath) {
  const imageData = fs.readFileSync(imagePath);
  const base64Image = imageData.toString("base64");

  const contents = [
    { text: prompt },
    {
      inlineData: {
        mimeType: "image/png",
        data: base64Image,
      },
    },
  ];

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-image",
    generationConfig: {
      responseModalities: ["Text", "Image"],
    },
  });

  try {
    const response = await model.generateContent(contents);
    for (const part of response.response.candidates[0].content.parts) {
      if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");
        const outputPath = `uploads/modified_${Date.now()}.png`;
        fs.writeFileSync(outputPath, buffer);
        return outputPath;
      }
    }
  } catch (error) {
    console.error("Error modifying image:", error);
    throw new Error("Failed to modify image");
  }
}

module.exports = { modifyImage };
