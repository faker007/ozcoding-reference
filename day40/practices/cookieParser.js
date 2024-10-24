const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "user1", { maxAge: 900000, httpOnly: true });

  res.send("쿠기가 설정되었습니다.");
});

app.get("/get-cookie", (req, res) => {
  const username = req.cookies.username;

  res.send(`쿠키 값: ${username}`);
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
