// fs-extra 모듈을 사용한 파일 복사

const fs = require("fs-extra");

async function copyFile() {
  try {
    await fs.copy("example.txt", "destination2.txt");

    console.log("파일이 성공적으로 복사되었습니다.");
  } catch (err) {
    console.error("파일 복사 에러:", err);
  }
}

copyFile();
