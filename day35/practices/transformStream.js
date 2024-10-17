const fs = require("fs");

const readable = fs.createReadStream("input.txt", { encoding: "utf-8" });
const writable = fs.createWriteStream("output.txt");

readable.on("data", (chunk) => {
  console.log(`${chunk.length}`);

  writable.write(chunk);
});

readable.on("end", () => {
  console.log("readable 끝");

  writable.end();
});

writable.on("finish", () => {
  console.log("All data has been written.");
});
