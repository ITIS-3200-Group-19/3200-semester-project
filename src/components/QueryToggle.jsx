// This file is for the search query toggle component.
// It will contain the toggle for users to switch whether the query is displayed.

function QueryToggle({ showSearchQuery, setShowSearchQuery }) {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="query-toggle-switch"
        onChange={() => setShowSearchQuery(!showSearchQuery)}
      ></input>
      <label htmlFor="query-toggle-switch" className="toggle">
        {""}
      </label>
    </div>
  );
}

export default QueryToggle;
