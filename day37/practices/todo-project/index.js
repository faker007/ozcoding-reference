const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = 3000; //! Hint: 변수가 전부 대문자라면, 관습적으로 상수임을 나타냄.

let todos = [];

if (fs.existsSync("todos.json")) {
  const data = fs.readFileSync("todos.json");

  todos = JSON.parse(data);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const { pathname } = parsedUrl;

  // Tip: CORS 설정 (여기는 복사/붙여넣기 해도 됩니다...!)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (pathname === "/todos") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify(todos));
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const todo = JSON.parse(body);
        todo.id = Date.now();
        todos.push(todo);
        fs.writeFileSync("todos.json", JSON.stringify(todos));
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(todo));
      });
    }
  } else if (pathname.startsWith("/todos/")) {
    const id = parseInt(pathname.split("/")[2]);
    const todoIndex = todos.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
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
        const updatedTodo = JSON.parse(body);

        todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };

        fs.writeFileSync("todos.json", JSON.stringify(todos));

        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify(todos[todoIndex]));
      });
    } else if (req.method === "DELETE") {
      todos.splice(todoIndex, 1);

      fs.writeFileSync("todos.json", JSON.stringify(todos));

      res.writeHead(204);

      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });

    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`To-Do 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
