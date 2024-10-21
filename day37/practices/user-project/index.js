const http = require("http");
const url = require("url");
const fs = require("fs");
const crypto = require("crypto");

const PORT = 8000;
let users = {};

// 데이터 파일 로드
if (fs.existsSync("users.json")) {
  const data = fs.readFileSync("users.json");
  users = JSON.parse(data);
}

const hashPassword = (password) => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

const generateToken = (email) => {
  return crypto
    .createHash("sha256")
    .update(email + Date.now())
    .digest("hex");
};

let tokens = {};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  // CORS 설정
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (pathname === "/signup" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const { email, password } = JSON.parse(body);
      if (users[email]) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User already exists" }));
        return;
      }
      const hashedPassword = hashPassword(password);
      users[email] = { email, password: hashedPassword };
      fs.writeFileSync("users.json", JSON.stringify(users));
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User created successfully" }));
    });
  } else if (pathname === "/login" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const { email, password } = JSON.parse(body);
      const user = users[email];
      if (!user || user.password !== hashPassword(password)) {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid credentials" }));
        return;
      }
      const token = generateToken(email);
      tokens[token] = email;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ token }));
    });
  } else if (pathname === "/protected" && req.method === "GET") {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      res.writeHead(401, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "No token provided" }));
      return;
    }
    const token = authHeader.split(" ")[1];
    if (!tokens[token]) {
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Invalid token" }));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: `Hello, ${tokens[token]}! This is a protected route.`,
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`인증 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
