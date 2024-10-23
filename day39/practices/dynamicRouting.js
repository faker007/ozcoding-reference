const express = require("express");

const app = express();

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  res.send(`사용자 ID: ${userId}의 정보를 조회 합니다.`);
});

app.get("/search", (req, res) => {
  const query = req.query.q;

  res.send(`${query}에 대한 검색 결과를 표시합니다.`);
});

app.listen(3000, () => {
  console.log("3000");
});
