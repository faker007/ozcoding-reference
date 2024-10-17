const fs = require("fs");

const additionalData = "\n Appending some more text.";

fs.appendFile("__example__.txt", additionalData, "utf-8", (err) => {
  if (err) {
    console.error("Error appending to file: ", err);

    return;
  }

  console.log("Data has been appended to example.txt");
});
