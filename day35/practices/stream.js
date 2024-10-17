const fs = require("fs");

// 읽기 스트림 생성
const readableStream = fs.createReadStream("example.txt", { encoding: "utf8" });

// 이벤트 기반으로 읽기 스트림 처리.
readableStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);

  console.log(chunk);
});

readableStream.on("end", () => {
  console.log("No more data.");
});

readableStream.on("error", (err) => {
  console.error("Error:", err);
});
