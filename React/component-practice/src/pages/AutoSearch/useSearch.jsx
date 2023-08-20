import { debounce, get } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";

export const useSearch = (url, path, threshold = 3, delay) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetching = useRef(false);

  const fetchData = useCallback(
    async (searchTerm) => {
      if (fetching.current) return;

      fetching.current = true;

      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${url}${searchTerm}`);
        const data = await res.json();
        const extractedData = get(data, path);
        setSearchResults(extractedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        fetching.current = false;
      }
    },
    [path, url]
  );

  const debouncedFetchData = useCallback(debounce(fetchData, delay), [delay]);

  const handleInput = (e) => {
    if (e.target.type === "text") {
      setSearchTerm(e.target.value);
    }
  };

  useEffect(() => {
    if (searchTerm.length >= threshold) {
      debouncedFetchData(searchTerm);
    }
  }, [debouncedFetchData, searchTerm, threshold]);

  return { searchTerm, searchResults, loading, error, handleInput };
};
