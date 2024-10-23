const express = require("express");
const i18n = require("i18n");

const app = express();

const anyObject = {};

i18n.configure({
  locales: ["en", "ko"],
  directory: __dirname + "/locales",
  defaultLocale: "en",
  queryParameter: "lang",
  register: anyObject,
});

app.use(i18n.init);

app.get("/", (req, res) => {
  anyObject.setLocale("ko");
  res.send(anyObject.__("Hello"));
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
