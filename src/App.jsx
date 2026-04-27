import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import ModeToggle from "./components/ModeToggle.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ResultsDisplay from "./components/ResultsDisplay.jsx";
import QueryToggle from "./components/QueryToggle.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
  const [mode, setMode] = useState("Vulnerable"); // State to track the mode (vulnerable or secure)
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [searchQuery, setSearchQuery] = useState("Test"); // State to store the current search query
  const [showSearchQuery, setShowSearchQuery] = useState(false); // State to track if showing query.

  return (
    <div className="app">
      <nav>
        {/* App title */}
        <h1>QueryShield</h1>
        <div className="nav-right">
          {/* Mode toggle (vulnerable/secure) */}
          <span className="toggle-label">Mode: {mode}</span>
          <ModeToggle mode={mode} setMode={setMode} />

          {/* Search query toggle */}
          <span className="toggle-label">Show Query:</span>
          <QueryToggle
            showSearchQuery={showSearchQuery}
            setShowSearchQuery={setShowSearchQuery}
          />

          {/* Logout button */}
          <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      </nav>

      {!isLoggedIn ? (
        // Pass the setter for logged-in state to the LoginForm component
        <LoginForm setIsLoggedIn={setIsLoggedIn} mode={mode} />
      ) : (
        // If the user is logged in, show the search bar and results display components
        <>
          <SearchBar
            searchQuery={searchQuery} // Pass the current search query to the SearchBar component
            setSearchQuery={setSearchQuery} // Pass setter for search query
            setSearchResults={setSearchResults} // Shows the search results
            showSearchQuery={showSearchQuery} // Pass state for showing search query
            setShowSearchQuery={setShowSearchQuery} // Pass setter for showing search query
            mode={mode} // Pass the current mode for query display styling
          />
          <ResultsDisplay results={searchResults} />
        </>
      )}
    </div>
  );
}

export default App;
