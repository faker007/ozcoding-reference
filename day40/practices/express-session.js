const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/session", (req, res) => {
  req.session.username = "무야호";
  res.send("세션이 설정되었습니다.");
});

app.get("/get-session", (req, res) => {
  const username = req.session.username;
  res.send(`세션 값: ${username}`);
});

app.listen(3000, () => {
  console.log(`서버가 3000번 포트에서 실행 중입니다.`);
});
