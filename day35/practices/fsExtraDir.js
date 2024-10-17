const fs = require("fs-extra");

async function createDirectory() {
  try {
    await fs.ensureDir("tempura/hotate");

    console.log("디렉토리가 생성되었거나 이미 존재합니다.");
  } catch (err) {
    console.error("디렉토리 생성 에러:", err);
  }
}

createDirectory();
