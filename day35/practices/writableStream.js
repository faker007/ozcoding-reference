const fs = require("fs");

const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Hello, Node.js Stream!\n");
writableStream.write("Writing more data...\n");
writableStream.end("Finished writing.");

writableStream.on("finish", () => {
  console.log("All data has been written.");
});

writableStream.on("error", (err) => {
  console.error("Error:", err);
});
