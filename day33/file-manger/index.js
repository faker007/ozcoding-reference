const readline = require("readline");
const {
  createDirectory,
  createFile,
  readFile,
  deleteFile,
  deleteDirectory,
} = require("./fileOperations");
const logger = require("./logger");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  try {
    const dirName = await askQuestion("생성할 디렉토리 이름을 입력하세요: ");
    const fileName = await askQuestion("생성할 파일 이름을 입력하세요: ");
    rl.close();

    const directory = await createDirectory(dirName);
    const filePath = await createFile(
      directory,
      fileName,
      "이것은 자동으로 생성된 파일입니다."
    );

    const content = await readFile(filePath);
    console.log("파일 내용:", content);

    // await deleteFile(filePath);
    // await deleteDirectory(directory);
  } catch (error) {
    logger.error(`애플리케이션 오류: ${error.message}`);
  }
}

main();
