const express = require("express");
const app = express();

// GET 요청을 처리하는 라우트
app.get("/about", (req, res) => {
  res.send("About 페이지입니다.");
});

// POST 요청을 처리하는 라우트
app.post("/submit", (req, res) => {
  res.send("데이터가 제출되었습니다.");
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
