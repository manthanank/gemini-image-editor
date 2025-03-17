const { modifyImage } = require("../services/geminiService");

async function modifyImageController(req, res) {
  const { prompt } = req.body;
  const imageFile = req.file;

  if (!prompt || !imageFile) {
    return res.status(400).json({ error: "Prompt and image are required" });
  }

  try {
    const modifiedImagePath = await modifyImage(prompt, imageFile.path);
    res.status(200).json({ message: "Image modified successfully", imagePath: modifiedImagePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { modifyImageController };
