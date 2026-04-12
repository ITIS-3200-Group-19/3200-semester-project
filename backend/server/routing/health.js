const express = require("express");
const app = express.Router();

// checks if the backend is running
app.get("/", (req, res) => {
  res.json("The backend is up and running");
});

// This exports the router
module.exports = app;