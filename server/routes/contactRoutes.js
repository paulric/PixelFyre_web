// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST a new contact message
router.post('/', async (req, res) => {
  const newContact = new Contact(req.body);
  const savedContact = await newContact.save();
  res.json(savedContact);
});

module.exports = router;