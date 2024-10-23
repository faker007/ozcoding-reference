const express = require("express");
const bodyParser = require("body-parser"); // post에서 req -> req.body 데이터를 가져 오는 친구.

const app = express();

const PORT = 3000;

let posts = [];

app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.json(posts);
});

// 게시글 작성
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };

  posts.push(newPost);

  res.status(201).json(newPost);
});

// 게시글 상세 보기
app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
  }

  res.json(post);
});

// 게시글 수정
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
  }

  posts[postIndex] = { ...posts[postIndex], title };

  res.json(posts[postIndex]);
});

// 게시글 삭제
app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);

  posts = posts.filter((p) => p.id !== postId);

  res.status(204).send({ message: "잘 지웠읍니다" });
});

app.get("/", (req, res) => {
  res.send("블로그 서버에 오신 것을 환영합니다!");
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
