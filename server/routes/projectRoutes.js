//project routes
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// POST new project
router.post('/', async (req, res) => {
  const newProject = new Project(req.body);
  const savedProject = await newProject.save();
  res.json(savedProject);
});

module.exports = router;