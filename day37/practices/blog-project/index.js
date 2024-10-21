const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = 5000;
let posts = [];

// 데이터 파일 (DB) 로드
if (fs.existsSync("posts.json")) {
  const data = fs.readFileSync("posts.json");

  posts = JSON.parse(data);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  // CORS 설정
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (pathname === "/posts") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(posts));
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const post = JSON.parse(body);

        post.id = Date.now();
        post.createdAt = new Date();

        posts.push(post);

        fs.writeFileSync("posts.json", JSON.stringify(posts));

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(post));
      });
    }
  } else if (pathname.startsWith("/posts/")) {
    const id = parseInt(pathname.split("/")[2]);
    const postIndex = posts.findIndex((p) => p.id === id);

    if (postIndex === -1) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Not Found" }));

      return;
    }

    if (req.method === "PUT") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const updatedPost = JSON.parse(body);

        posts[postIndex] = { ...posts[postIndex], ...updatedPost };

        fs.writeFileSync("posts.json", JSON.stringify(posts));

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(posts[postIndex]));
      });
    } else if (req.method === "DELETE") {
      posts.splice(postIndex, 1);

      fs.writeFileSync("posts.json", JSON.stringify(posts));

      res.writeHead(204);
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`블로그 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
