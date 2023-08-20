import { debounce } from "lodash";
import { useCallback, useEffect, useRef } from "react";
import InfiniteList from "./InfiniteList";
import { useInfinteScroll } from "./useInfiniteScroll";

function InfiniteListContainer() {
  const { items, loading, error, setSkip, skip } = useInfinteScroll();
  const containerRef = useRef(null);

  const handleScroll = useCallback(
    debounce(() => {
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      const threshold = 0.8;

      if (scrollTop + clientHeight >= scrollHeight * threshold) {
        setSkip(skip + 10);
      }
    }, 300),
    [skip]
  );

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div ref={containerRef} style={{ height: "300px", overflowY: "scroll" }}>
      <InfiniteList items={items} loading={loading} error={error} />
    </div>
  );
}

export default InfiniteListContainer;
