const fs = require("fs");

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.err("파일 읽기 에러", err);

    return;
  }

  console.log(data);
});

console.log("파일 읽기 요청 완료");
