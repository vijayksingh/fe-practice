import { useCallback, useEffect, useRef, useState } from "react";
/* eslint-disable */

export const useInfinteScroll = (initialSkip, limit = 10) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [skip, setSkip] = useState(0);
  const fetchingRef = useRef(false);

  const fetchDate = useCallback(async () => {
    if (fetchingRef.current) return;

    fetchingRef.current = true;
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?skip=${
          initialSkip || skip
        }&limit=${limit}`
      );
      const data = await response.json();
      setItems((prev) => [...prev, ...data.products]);
    } catch (e) {
      setError("Issue in fetching data");
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }, [initialSkip, limit, skip]);

  useEffect(() => {
    fetchDate();
  }, [skip, fetchDate]);

  return { items, loading, error, setSkip, skip };
};
