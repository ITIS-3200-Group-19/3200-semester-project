// import section
const express = require("express");
const cors = require("cors");

// environment variable loadup
require("dotenv").config();

// Creates the server
const app = express();

// Sets up the port number
const PORT = process.env.PORT || 3000;

// Sets up the Middleware
app.use(cors());
app.use(express.json());

// Routes section
app.use("/health", require("./routing/health"));

// Starts up the server and tells you if the server is running
app.listen(PORT, () => {
  console.log("The Server is up and running on PORT " + PORT);
});
