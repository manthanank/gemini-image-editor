const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // Serve uploaded images

// Routes
app.use("/api/image", imageRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Gemini AI Image Modifier API");
});

module.exports = app;
