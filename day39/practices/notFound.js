const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("홈 페이지");
});

app.use((req, res, next) => {
  res.status(404).send("페이지를 찾을 수 없습니다.");
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
