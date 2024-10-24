const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

const { authorizeRole } = require("../middlewares/authMiddleware");

router.get("/", authorizeRole("admin"), userController.getUsers);

router.get("/:id", userController.getUserById);

module.exports = router;
