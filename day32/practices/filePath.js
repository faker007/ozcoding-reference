const fs = require("fs");
const path = require("path");

const directory = path.join(__dirname, "data");
const filePath = path.join(directory, "info.txt");

// 디렉토리 생성
fs.mkdir(directory, { recursive: true }, (err) => {
  if (err) throw err;

  // 파일 쓰기
  const content = "Node.js와 path 모듈을 사용한 예제입니다.";

  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;

    console.log(`파일이 생성되었습니다: ${filePath}`);

    // 파일 읽기
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;

      console.log("파일 내용:", data);
    });
  });
});
