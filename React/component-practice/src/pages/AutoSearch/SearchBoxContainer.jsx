/* eslint-disable react/prop-types */
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { useSearch } from "./useSearch";

function SearchBoxContainer({ url, path, displayKey, customRender }) {
  const { searchTerm, searchResults, loading, error, handleInput } = useSearch(
    url,
    path,
    1,
    500
  );

  return (
    <div>
      <SearchInput
        value={searchTerm}
        handleInput={handleInput}
        placeholder={"Your query here..."}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {customRender ? (
        customRender(searchResults, displayKey)
      ) : (
        <SearchResults
          results={searchResults}
          displayKey={displayKey}
          key={"id"}
        />
      )}
    </div>
  );
}

function SearchBoxContainerDemo() {
  //  use star wars api to show list of characters
  return (
    <SearchBoxContainer
      url="https://swapi.dev/api/people/?search="
      path="results"
      displayKey="name"
    />
  );
}

export default SearchBoxContainerDemo;
