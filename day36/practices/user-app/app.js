// app.js
const http = require("http");
const userRoutes = require("./routes/userRoutes");

// 서버 생성
const server = http.createServer((req, res) => {
  userRoutes(req, res);
});

// 서버 시작
const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
x;
