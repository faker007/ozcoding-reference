// src/routes/posts.js
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");
const { body, validationResult } = require("express-validator");
const CustomError = require("../utils/CustomError");

// 게시물 작성
router.post(
  "/",
  authenticate,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("content")
      .isLength({ min: 10 })
      .withMessage("Content must be at least 10 characters"),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(new CustomError("Validation Failed", 400));
    }

    try {
      const { title, content } = req.body;

      const post = await Post.create({ title, content, author: req.user.id });

      res.status(201).json(post);
    } catch (err) {
      next(err);
    }
  }
);

// 게시물 목록 조회
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find({});

    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// 게시물 상세 조회
router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(new CustomError("Post not found", 404));
    }
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// 게시물 수정
router.put("/:id", authenticate, async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(new CustomError("Post not found", 404));
    }

    const { title, content } = req.body;

    post.title = title || post.title;

    post.content = content || post.content;

    await post.save();

    res.json(post);
  } catch (err) {
    next(err);
  }
});

// 게시물 삭제
router.delete("/:id", authenticate, async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(new CustomError("Post not found", 404));
    }
    await post.remove();

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
