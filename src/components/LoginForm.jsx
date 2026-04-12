// This file is for the login form component.
// It will contain the form for users to log in to their accounts.

function LoginForm({ setIsLoggedIn }) {
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior.
    // Handle login logic here (e.g., send credentials to the server to check if they are valid,).
    // Set logged-in state if successful, or show an error message if not.
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
