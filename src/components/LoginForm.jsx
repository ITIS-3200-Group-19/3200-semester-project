// This file is for the login form component.
// It will contain the form for users to log in to their accounts.

import { useState } from "react";

// Node.js Crypto Module for hashing and salting passwords
// const { scrypt, randomBytes } = require("node:crypto");

function LoginForm({ setIsLoggedIn, mode }) {
  // State to track if an error message should be shown (e.g., if login fails).
  const [showError, setShowError] = useState(false); // Tracking if error in finding login details.
  const [showHashError, setShowHashError] = useState(false); // Tracking if error occured during hashing.
  const [enteredUsername, setEnteredUsername] = useState(""); // State to track the username input
  const [enteredPassword, setEnteredPassword] = useState(""); // State to track the password input

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior.
    // Handle login logic here (e.g., send credentials to the server to check if they are valid,).
    // Set logged-in state if successful, or show an error message if not.

    // //testing purposes:
    setIsLoggedIn(true); // TODO: Remove this line after implementing the actual login logic.

    // Check database to see if the username exists, if not show error.
    // Username checking logic will differ based on the security level (mode).
    // const usernameValid = false;
    // if (mode === "Vulnerable") {
    //   // TODO: Unsecurely check if the username exists in the database.
    // } else {
    //   // mode is "Secure":
    //   // TODO: Securely check if the username exists in the database.
    // }

    // if (usernameValid) {
    //   verifyPassword(); // If the username is valid, verify the password.
    //   setShowError(false);
    // } else {
    //   setShowError(true); // If the username is not valid, show the error message.
    // }
  }

  // function verifyPassword() {
  //   // Check database if password is correct for the given username, if not show error.
  //   // The password checking logic will differ based on the security level (mode).
  //   if (mode === "Vulnerable") {
  //     // Simple password check (against passwords in the database)
  //     const userPasswordFromDB = "placeholder"; // [SQL injection vulnerability here!] TODO: Replace with actual password retrieval from the database for the given username.
  //     if (enteredPassword === userPasswordFromDB) {
  //       setIsLoggedIn(true); // If the password is correct, set logged-in state to true.
  //       setShowHashError(false);
  //     } else {
  //       setShowError(true); // If the password is incorrect, show the error message.
  //     }
  //   } else {
  //     // mode is "Secure":

  //     const salt = randomBytes(16).toString("hex"); // Generate a random salt

  //     /*
  //     Hash and salt password and check against the stored hash in the database.
  //     64: key length (length of the derived key in bytes).
  //     N: Cost parameter (CPU/memory cost), higher number better but slower.
  //     r: Block size parameter, affects memory usage and parallelization.
  //     p: Parallelization parameter, affects how many parallel threads are used to compute the hash.
  //     */
  //     try {
  //       scrypt(
  //         enteredPassword,
  //         salt,
  //         64,
  //         { N: 16384, r: 8, p: 1 },
  //         (err, derivedKey) => {
  //           if (err) throw err;
  //           const hashedPassword = derivedKey.toString("hex"); // Convert derived key to hexadecimal.

  //           // Check the hashed password against the stored hash in the database for the given username.
  //           const userPasswordHashFromDB = "placeholder"; // [SQL injection vulnerability here! FIX LATER!] TODO: Replace with actual password hash retrieval from the database for the given username.
  //           if (hashedPassword === userPasswordHashFromDB) {
  //             setIsLoggedIn(true); // If the password is correct, set logged-in state to true.
  //             setShowHashError(false);
  //           } else {
  //             setShowError(true); // If the password is incorrect, show the error message.
  //           }
  //         },
  //       );
  //     } catch (error) {
  //       console.error("Error hashing password:", error);
  //       setShowHashError(true); // Set the hash error state to true.
  //     }
  //   }
  // }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Username"
          value={enteredUsername} // Bind the username input to the username state
          onChange={(e) => setEnteredUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          value={enteredPassword} // Bind the password input to the password state
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        {showError && (
          <p className="error-message">
            Invalid username or password. Please try again.
          </p>
        )}
        {showHashError && (
          <p className="error-message">
            Password processing error. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
