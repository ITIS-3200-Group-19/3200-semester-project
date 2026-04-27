//Database connection import
const database = require("../database");

// Import Express and creates the router
const express = require("express");
const router = express.Router();
const crypto = require("crypto");

// Test to return the users of the SQL database
router.get("/", async (req, res) => {
  try {
    const [rows] = await database.query("SELECT * FROM User");
    res.json({ success: true, count: rows.length, result: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//Router exporter
module.exports = router;
