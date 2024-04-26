// server.js

require('dotenv').config({ path: './config/config.env' });

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { MongoClient, ServerApiVersion } = require("mongodb");

const PORT = 3001;

dotenv.config({ path: "./config/config.env" });

const User = require('./models/User');

// connect the database
connectDB();


// app.use(express.static(path.join(__dirname, 'client', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

// routes
// app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

