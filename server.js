const app = require("./app");
const { port } = require("./config/env");
const fs = require("fs");

// Ensure uploads directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
