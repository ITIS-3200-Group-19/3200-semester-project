import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import ModeToggle from "./components/ModeToggle.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ResultsDisplay from "./components/ResultsDisplay.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track if the user is logged in
  const [mode, setMode] = useState("Vulnerable"); // State to track the mode (vulnerable or secure)
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [searchQuery, setSearchQuery] = useState(""); // State to store the current search query

  return (
    <div className="app">
      <nav>
        {/* App title */}
        <h1>QueryShield</h1>
        <div className="nav-right">
          {/* Mode toggle (vulnerable/secure) */}
          <span className="mode-label">Mode: {mode}</span>
          <ModeToggle mode={mode} setMode={setMode} />

          {/* Logout button */}
          <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      </nav>

      {!isLoggedIn ? (
        // Pass the setter for logged-in state to the LoginForm component
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        // If the user is logged in, show the search bar and results display components
        <>
          <SearchBar
            searchQuery={searchQuery} // Pass the current search query to the SearchBar component
            setSearchQuery={setSearchQuery} // Pass setter for search query
            setSearchResults={setSearchResults} // Pass setter for search results
          />
          <ResultsDisplay results={searchResults} />
        </>
      )}
    </div>
  );
}

export default App;
