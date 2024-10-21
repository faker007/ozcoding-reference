const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = 6000;
let products = [];
let orders = [];

// 데이터 파일 로드
if (fs.existsSync("products.json")) {
  const data = fs.readFileSync("products.json");
  products = JSON.parse(data);
}

if (fs.existsSync("orders.json")) {
  const data = fs.readFileSync("orders.json");
  orders = JSON.parse(data);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  // CORS 설정
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (pathname === "/products") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    }
  } else if (pathname.startsWith("/products/")) {
    const id = parseInt(pathname.split("/")[2]);
    const product = products.find((p) => p.id === id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
      return;
    }

    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } else if (pathname === "/orders" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const order = JSON.parse(body);
      order.id = Date.now();
      order.createdAt = new Date();
      orders.push(order);
      fs.writeFileSync("orders.json", JSON.stringify(orders));
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(order));
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`전자상거래 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
