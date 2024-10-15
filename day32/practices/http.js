const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });

  res.end("Hello, HTTP!\n");
});

const PORT = 3000;

server.listen(3000, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
