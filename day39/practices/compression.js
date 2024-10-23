const express = require("express");
const compression = require("compression");

const app = express();

app.get("/", (req, res) => {
  res.send("압축된 응답 데이터");
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
