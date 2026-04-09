import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import ModeToggle from "./components/ModeToggle.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ResultsDisplay from "./components/ResultsDisplay.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
  const [mode, setMode] = useState("vulnerable"); // State to track the mode (vulnerable or secure)
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [searchQuery, setSearchQuery] = useState(""); // State to store the current search query

  return (
    <div className="app">
      <LoginForm />
      <ModeToggle />
      <SearchBar />
      <ResultsDisplay />
    </div>
  );
}

export default App;
