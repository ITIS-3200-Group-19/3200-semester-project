// This file is for the results display component.
// It will contain the display for the results of the search passed to it.

function ResultsDisplay({ results }) {
  return (
    <div className="results-container">
      <h2 className="results-header">Results for your search:</h2>
      {/* Temporary Placeholder hardcoded list below for testing purposes. 
      A map will be used later and replace the hardcoded list */}
      <ul className="result-list">
        <li className="result-list-item">
          <h3>Result 1:</h3>
          <p>This is the first result.</p>
        </li>
        <li className="result-list-item">
          <h3>Result 2:</h3>
          <p>This is the second result.</p>
        </li>
        <li className="result-list-item">
          <h3>Result 3:</h3>
          <p>This is the third result.</p>
        </li>
      </ul>
    </div>
  );
}

export default ResultsDisplay;
