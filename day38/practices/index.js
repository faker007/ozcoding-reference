const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.post("/submit", (req, res) => {
  res.send("Form submitted");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
