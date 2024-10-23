const express = require("express");
const app = express();

function apiKeyChecker(req, res, next) {
  // req.headers x-api-key << 이 값이 있는지 확인 하고 싶어요
  if (req.headers["x-api-key"]) {
    next();
  } else {
    res.status(400).send("x-api-key 헤더가 필요합니다.");
  }
}

app.use(apiKeyChecker);

app.get("/", (req, res) => {
  res.send("API 키가 확인되었습니다.");
});

app.listen(3000, () => {
  console.log("서버 3000번 포트에서 실행 중입니다.");
});
