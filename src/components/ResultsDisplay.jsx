// This file is for the results display component.
// It will contain the display for the results of the search passed to it.

function ResultsDisplay({ results }) {
  return (
    <div className="results-container">
      <h2>Results for your search:</h2>

      <ul>
        {results.map((user) => (
          <li key={user.id}>
            <h3>{user.username}</h3>
            <p>Mode: {user.mode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsDisplay;
