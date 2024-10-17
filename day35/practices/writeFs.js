const fs = require("fs");
const data = "This is some sample text.";

fs.writeFile("__example__.txt", data, "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);

    return;
  }

  console.log("Data has been written to example.txt");
});
