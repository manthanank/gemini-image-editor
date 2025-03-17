require('dotenv').config();

module.exports = {
  geminiApiKey: process.env.GEMINI_API_KEY,
  port: process.env.PORT || 5000,
};
