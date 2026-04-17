//Database connection import
const database = require("../database");

// Import Express and creates the router
const express = require("express");
const router = express.Router();

// Route tester for database connections
router.get("/", async (req, res) => {
  try { //Runs a query to test if the database is connected
    const result = await database.query("SELECT NOW() AS currentTime;");
    res.json({ success: true, data: result[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//Router exporter
module.exports = router;