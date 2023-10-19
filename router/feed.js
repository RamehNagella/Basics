const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

// GET/feed/post

router.get("/post", feedController.getPosts);
// to reach this route we need to register this routes in app.js file so go and register this routes

// POST/feed/post

router.post("/post", feedController.createPost);

module.exports = router;
