const fs = require("fs");

const readableStream = fs.createReadStream("largeFile.txt");
const writableStream = fs.createWriteStream("output.txt");

readableStream.pipe(writableStream);

readableStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on("end", () => {
  console.log("Finished copying file.");
});

readableStream.on("error", (err) => {
  console.error("Read Error:", err);
});

writableStream.on("error", (err) => {
  console.error("Write Error:", err);
});
