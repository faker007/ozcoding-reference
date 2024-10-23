// 간단한 사용자 인증 시스템 구현

const express = require("express");
const session = require("express-session");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
});

app.use(express.json());
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(limiter);

// 로그인 라우트
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "user" && password === "pass") {
    req.session.user = username;

    res.send("로그인 성공");
  } else {
    res.status(401).send("로그인 실패");
  }
});

// 인증 미들웨어
function authMiddleware(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send("인증이 필요합니다.");
  }
}

app.get("/protected", authMiddleware, (req, res) => {
  res.send(`${req.session.user}님!`);
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
