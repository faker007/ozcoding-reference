const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = 4000;

let messages = [];

// 데이터 파일 (DB) 로드
if (fs.existsSync("messages.json")) {
  const data = fs.readFileSync("messages.json");
  messages = JSON.parse(data);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  // CORS 설정 (익숙하시죠!!?)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();

    return;
  }

  if (pathname === "/messages") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(messages));
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const message = JSON.parse(body);

        message.id = Date.now();
        messages.push(message);

        fs.writeFileSync("messages.json", JSON.stringify(messages));

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(message));
      });
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`채팅 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
