// This file is for the search bar component.
// It will contain the form for users to search for [whatever we decide].

import React, { useState } from "react";

function SearchBar({
  searchQuery,
  setSearchQuery,
  setSearchResults,
  showSearchQuery,
  mode,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  async function handleSearchBtnClick(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (searchTerm.trim() === "") return;
    const respond = await fetch(
      `http://localhost:3000/search?query=${encodeURIComponent(searchTerm)}&mode=${mode}`
    );

    const info = await respond.json();

    if (info.success) {
      setSearchQuery(searchTerm);
      setSearchResults(info.results);
    }
  }

  function handleEnterKeyDown(event) {
    if (event.key === "Enter") {
      // Check if the Enter key was pressed
      handleSearchBtnClick(event); // Call the search button click handler
    }
  }

  const payload = [
    "' OR 1=1 --"

  ];

  return (
    <div className="search-container">
      <form className="search-form">
        <input
          type="text"
          value={searchTerm}
          className="search-input"
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyDown}
          placeholder="Search..."
        />
        <button
          type="button"
          className="search-btn"
          onClick={handleSearchBtnClick}
        >
          &#x26B2;
        </button>
      </form>
      {showSearchQuery && (
        <span className={`query-display-${mode.toLowerCase()}`}>
          Current ({mode === "Vulnerable" ? "Vulnerable" : "Secure"}) Search
          Query: {searchQuery}
        </span>
      )}
    </div>
  );
}

export default SearchBar;
