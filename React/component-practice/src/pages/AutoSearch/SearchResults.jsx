/* eslint-disable react/prop-types */
import { get } from "lodash";
import "./styles.css";
function SearchResults({ results, displayKey, key }) {
  return (
    <div
      className="suggestions-list"
      style={{ height: "300px", overflowY: "scroll" }}
    >
      {results.map((result) => (
        <article key={result[key]}>{get(result, displayKey)}</article>
      ))}
    </div>
  );
}

export default SearchResults;
