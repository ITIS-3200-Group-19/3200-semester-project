// environment variable loadup
require("dotenv").config();

// import section
const express = require("express");
const cors = require("cors");


// Creates the server
const app = express();

// Sets up the port number
const PORT = process.env.PORT || 3000;

// Sets up the Middleware
app.use(cors());
app.use(express.json());

// Routes section
app.use("/health", require("./routing/health")); // checks if the backend server is running
//http://localhost:3000/health
app.use("/test-db", require("./routing/testing_database")); // verifies if the SQL database is connected
http://localhost:3000/test-db
app.use("/user", require("./routing/user")); // grabs the user data and returns it
http://localhost:3000/user

// Starts up the server and tells you if the server is running
app.listen(PORT, () => {
  console.log("The Server is up and running on PORT " + PORT);
});