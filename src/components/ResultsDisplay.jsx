// This file is for the results display component.
// It will contain the display for the results of the search passed to it.

function ResultsDisplay({ results }) {
  return (
    <div className="results-container">
      <h2 className="results-header">Results for your search:</h2>
      <p>Results: {results.length}</p>

      <ul className="result-list">
        {results.map((user) => (
          <li key={user.id} className="result-list-item">
            <h3>ID: {user.id}</h3>
            <h3>Username: {user.username}</h3>
            <p>Mode: {user.mode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsDisplay;
