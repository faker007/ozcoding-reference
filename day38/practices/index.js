const express = require("express");
const usersRouter = require("./routes/users");

const app = express();

app.get("/", middleware, (req, res) => {
  res.json({ name: "Hello, world2" });
});

app.use("/users", usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
