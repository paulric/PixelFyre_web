// (Application Configuration)
const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const teamRoutes = require('./routes/teamRoutes');
const blogRoutes = require('./routes/blogRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the API'); // This is the response when accessing http://localhost:5000/
});

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contacts', contactRoutes);

module.exports = app;