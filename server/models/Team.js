const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Team', teamSchema);