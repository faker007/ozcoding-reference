const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/dashboard", (req, res) => {
  const sessionId = req.cookies["session_id"];

  console.log(JSON.stringify(req.cookies, null, 2));

  if (sessionId === "123456") {
    res.send("대시보드에 오신 것을 환영합니다!");
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
});

app.get("/create-cookie", (req, res) => {
  res
    .status(200)
    .cookie("session_id", "123456", {
      path: "/",
      sameSite: "none",
    })
    .json({ message: "발급 완료" });
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
