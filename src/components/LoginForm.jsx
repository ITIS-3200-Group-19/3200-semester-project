// This file is for the login form component.
// It will contain the form for users to log in to their accounts.

import { useState } from "react";

function LoginForm({ setIsLoggedIn, mode }) {
  const [showError, setShowError] = useState(false); // Tracking if error in finding login details.
  const [showHashError, setShowHashError] = useState(false); // Tracking for hashing error.
  const [enteredUsername, setEnteredUsername] = useState(""); // State to track the username input
  const [enteredPassword, setEnteredPassword] = useState(""); // State to track the password input

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior.

    // Call the function to verify login credentials when user clicks submit.
    verifyLogin();
  }

  // Handle login logic here (e.g., send credentials to the server to check if they are valid,).
  // Set logged-in state if successful, or show an error message if not.
  async function verifyLogin() {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: enteredUsername,
        password: enteredPassword,
        mode: mode,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setIsLoggedIn(true); // Set logged-in state to true if login successful
    }
    setShowError(data.loginError); // Show login error message if login failed
    setShowHashError(data.hashingError); // Show hashing error message if there was a hashing error
  }

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
