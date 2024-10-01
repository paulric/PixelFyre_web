// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET all blog posts
router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// POST a new blog post
router.post('/', async (req, res) => {
  const newBlog = new Blog(req.body);
  const savedBlog = await newBlog.save();
  res.json(savedBlog);
});

module.exports = router;