const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Data = require('./schema/loginSchema'); // Import your Mongoose model
const config = require('./config'); // Import your config file

const app = express();
const PORT = config.port;
const MONGODB_URI = config.mongoURI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Route to handle login request
app.post('/login', (req, res) => {
  const { username, password } = req.body;
console.log("login call",req.body);
  // Find user in MongoDB
  Data.findOne({ name: username, age: password })
    .then(user => {
      if (!user) {
        res.status(400).json({ error: "Invalid username or password" });
      } else {
        res.json({ message: "Login successful", user });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
