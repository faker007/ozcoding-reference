const userModel = require("../models/userModel");

const listUsers = (req, res) => {
  const users = userModel.getAllUsers();

  res.end(JSON.stringify(users, null, 2));
};

const createUser = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const parsedBody = new URLSearchParams(body);

    const name = parsedBody.get("name");

    if (name) {
      userModel.addUser({ name });

      res.writeHead(302, { Location: "/users" });

      res.end();
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });

      res.end("Bad Request: Name is required");
    }
  });
};

const deleteUser = (req, res, id) => {
  const success = userModel.deleteUser(id);

  if (success) {
    res.writeHead(302, { Location: "/users" });

    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });

    res.end("User Not Found");
  }
};

module.exports = {
  listUsers,
  createUser,
  deleteUser,
};
