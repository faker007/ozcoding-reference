const fs = require("fs");

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:".err);
    return;
  }

  console.log("File 내용은...\n");

  console.log(data);
});