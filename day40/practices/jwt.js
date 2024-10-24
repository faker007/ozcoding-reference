const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if ((username === "user1234", password === "password1234")) {
    const token = jwt.sign(
      { name: "무야호", role: "admin" },
      "짱짱쌘_비밀_키",
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false });

    res.send(token);
  } else {
    res.send("실패데스");
  }
});

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, "짱짱쌘_비밀_키", (err, user) => {
      if (err) {
        return res.status(403).send("토큰이 유효하지 않습니다.");
      }

      req.user = user;

      next();
    });
  } else {
    res.status(401).send("로그인 필");
  }
};

app.get("/dashboard", authenticateJWT, (req, res) => {
  res.send(`Welcome ${req.user.name}`);
});

app.listen(3000, () => {
  console.log("3000 is on");
});
