// fs.readFileSync 메서드는 파일을 동기적으로 읽어오며, 파일 읽기가 완료될 때까지 다음 코드(console.log('파일 읽기 완료'))는 실행되지 않습니다.
const fs = require("fs");

try {
  const data = fs.readFileSync("example.txt", "utf8");

  console.log(data);
} catch (err) {
  console.error("파일 읽기 에러:", err);
}

console.log("파일 읽기 완료");
