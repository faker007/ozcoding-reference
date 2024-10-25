const express = require("express");

const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).send("모든 필드를 입력해주세요.");
  }

  res.send(`username: ${username}, email: ${email}`);
});

app.listen(3000, () => {
  console.log("서버가 포트 3000번에서 작동 중입니다.");
});
