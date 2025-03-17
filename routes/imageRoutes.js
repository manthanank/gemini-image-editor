const express = require("express");
const { modifyImageController } = require("../controllers/imageController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/modify", upload.single("image"), modifyImageController);

module.exports = router;
