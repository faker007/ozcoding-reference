const fs = require("fs");

// 비동기 파일 쓰기
fs.writeFile("example.txt", "Hello, Node.js!", "utf8", (err) => {
  if (err) {
    console.error("파일 쓰기 에러:", err);
    return;
  }

  // 비동기 파일 읽기
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("파일 읽기 에러:", err);
      return;
    }

    console.log("파일 내용:", data); // 2
  });

  console.log("파일이 성공적으로 작성되었습니다."); // 1
});

console.log("파일 읽기/쓰기 작업이 요청되었습니다."); // 3
