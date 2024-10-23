const express = require("express");

const app = express();

app.use(express.json());

const validateRegister = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(email)) {
    return res.status(400).send("유효 하지 않은 이메일입니다.");
  }

  if (password.length < 6) {
    return res.status(400).send("비밀번호는 최소 6자 이상이어야 합니다.");
  }

  next();
};

app.post("/register", validateRegister, (req, res) => {
  res.send("회원 가입 성공");
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
