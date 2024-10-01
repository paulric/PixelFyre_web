const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// GET all team members
router.get('/', async (req, res) => {
  const team = await Team.find();
  res.json(team);
});

// POST new team member
router.post('/', async (req, res) => {
  const newMember = new Team(req.body);
  const savedMember = await newMember.save();
  res.json(savedMember);
});

module.exports = router;