//Client receiver for MySQL
const mysql = require('mysql2/promise');
require("dotenv").config();

// Connection pool creator
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "new_password123",
    database: "security_project",
    waitForConnections: true, // Waits till there is a connection
    connectionLimit: 10, // What is the maximum amount of people that can connect at the same time
    queueLimit: 0 // Unlimited amount of request
});

// make the pool available to other files
module.exports = pool;

