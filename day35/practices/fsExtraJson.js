const fs = require("fs-extra");

async function readAndWriteJson() {
  try {
    const data = await fs.readJson("data.json");
    console.log("읽은 데이터:", data);

    data.newKey = "새로운 값";
    await fs.writeJson("data.json", data, { spaces: 2 });
    console.log("데이터가 성공적으로 작성되었습니다.");
  } catch (err) {
    console.error("JSON 처리 에러:", err);
  }
}

readAndWriteJson();
