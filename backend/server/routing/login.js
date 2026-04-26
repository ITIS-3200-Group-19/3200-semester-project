//Database connection import
const database = require("../database");

// Import Express and creates the router
const express = require("express");
const router = express.Router();
const crypto = require("crypto");

/*
Route to handle user login.
Accepts entered username, entered password, and mode (vulnerable or secure) from the frontend.
Depending on the mode, it runs a vulnerable or secure login process.
Returns:
  success: true if login successful
  loginError: true if login failed
  hashingError: true if there was an error during password hashing
*/
router.post("/", async (req, res) => {
  const { username, password, mode } = req.body;

  if (username.trim() === "" || password.trim() === "") {
    // Check for empty username or password
    return res.status(400).json({
      success: false,
      loginError: true,
      hashingError: false,
    });
  }

  if (mode === "Vulnerable") {
    // Warning: The following code is intentionally vulnerable to SQL injection.

    const query = `SELECT * FROM User WHERE username = '${username}' AND password = '${password}'`;

    try {
      const [rows] = await database.query(query);

      res.json({
        success: true, // If username found with such password, return success.
        loginError: false,
        hashingError: false, // Hashing error not relevant here but needs to be included.
      });
    } catch (err) {
      res.status(401).json({
        success: false, // No username found with such password, return failure.
        loginError: true,
        hashingError: false, // Hashing error not relvant here but needs to be included.
      });
    }
  } else {
    // Mode is "Secure". Query is parameterized to prevent SQL injection.
    const query = `SELECT * FROM User WHERE username = ?`;

    try {
      const [rows] = await database.query(query, [username]);

      if (rows.length === 0) {
        // No user found with the provided username, return login error.
        return res.status(401).json({
          success: false,
          loginError: true,
          hashingError: false,
        });
      }

      // Grab the user data from the query result:
      const user = rows[0];
      // Grab the user's salt:
      const salt = user.salt;

      /*
      Hash and salt password and check against the stored hash in the database.
      64: key length (length of the derived key in bytes).
      N: Cost parameter (CPU/memory cost), higher number better but slower.
      r: Block size parameter, affects memory usage and parallelization.
      p: Parallelization parameter, affects how many parallel threads are used to compute the hash.
      */
      try {
        crypto.scrypt(
          password,
          salt,
          64,
          { N: 16384, r: 8, p: 1 },
          (err, derivedKey) => {
            if (err) throw err;
            // Convert the derived key to a hexadecimal string for comparison.
            const hashedPassword = derivedKey.toString("hex");

            // Compare the hashed password with the stored hashed password in the database.
            if (hashedPassword === user.password) {
              // TODO: get hashedPassword into database.
              res.json({
                success: true,
                loginError: false,
                hashingError: false,
              });
            } else {
              throw new Error("Invalid password");
            }
          },
        );
      } catch (error) {
        // Error during hashing, return hashing error.
        res.json({
          success: false,
          loginError: false,
          hashingError: true,
        });
      }
    } catch (err) {
      // Error during database query, return login error (e.g., user not found).
      res.status(401).json({
        success: false,
        loginError: true,
        hashingError: false,
      });
    }
  }
});

//Router exporter
module.exports = router;