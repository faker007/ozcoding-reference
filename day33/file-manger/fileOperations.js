const fs = require("fs").promises;
const path = require("path");
const logger = require("./logger");

async function createDirectory(dirName) {
  const directoryPath = path.join(__dirname, "..", dirName);
  try {
    await fs.mkdir(directoryPath, { recursive: true });
    logger.info(`디렉토리가 생성되었습니다: ${directoryPath}`);
    return directoryPath;
  } catch (error) {
    logger.error(`디렉토리 생성 오류: ${error.message}`);
    throw error;
  }
}

async function createFile(directory, fileName, content) {
  const filePath = path.join(directory, fileName);
  try {
    await fs.writeFile(filePath, content, "utf8");
    logger.info(`파일이 생성되었습니다: ${filePath}`);
    return filePath;
  } catch (error) {
    logger.error(`파일 작성 오류: ${error.message}`);
    throw error;
  }
}

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    logger.info(`파일 읽기 성공: ${filePath}`);
    return data;
  } catch (error) {
    logger.error(`파일 읽기 오류: ${error.message}`);
    throw error;
  }
}

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    logger.info(`파일이 삭제되었습니다: ${filePath}`);
  } catch (error) {
    logger.error(`파일 삭제 오류: ${error.message}`);
    throw error;
  }
}

async function deleteDirectory(directory) {
  try {
    await fs.rmdir(directory, { recursive: true });
    logger.info(`디렉토리가 삭제되었습니다: ${directory}`);
  } catch (error) {
    logger.error(`디렉토리 삭제 오류: ${error.message}`);
    throw error;
  }
}

module.exports = {
  createDirectory,
  createFile,
  readFile,
  deleteFile,
  deleteDirectory,
};
