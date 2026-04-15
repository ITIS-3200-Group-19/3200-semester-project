// This file is for the search bar component.
// It will contain the form for users to search for [whatever we decide].

import React, { useState } from "react";

function SearchBar({ searchQuery, setSearchQuery, setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearchBtnClick() {
    if (searchTerm.trim() !== "") {
      // Perform search logic here or call a function to handle the search.
    }
  }

  function handleEnterKeyDown(event) {
    if (event.key === "Enter") {
      handleSearchBtnClick();
    }
  }

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
    </div>
  );
}

export default SearchBar;
