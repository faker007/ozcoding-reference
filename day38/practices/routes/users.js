const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/:userId", (req, res) => {
  res.send(`User Id: ${req.params.userId}`);
});

module.exports = router;
