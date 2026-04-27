//Database connection import
const database = require("../database");

// Import Express and creates the router
const express = require("express");
const router = express.Router();

// Vulnerable and safe Search Route
router.get("/", async (req, res) => {
    const {query, mode} = req.query;

    if (!query) {
        return res.status(400).json({ success: false, error: "query is missing" });
    }

    try {
        let sql;

        //vulnerable mode
        if (mode === "Vulnerable") {
            sql = `SELECT id, username, mode FROM User WHERE username LIKE '%${query}%'`;
        }
        //safe mode
        else {
            sql = `SELECT id, username, mode FROM User WHERE username LIKE ?`;
        }

        const [rows] =
            mode === "Vulnerable"
                ? await database.query(sql)
                : await database.query(sql, [`%${query}%`]);

    res.json({ success: true, results: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
);
//Router exporter
module.exports = router;