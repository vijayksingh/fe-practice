/* eslint-disable */

function InfiniteList({ items, loading, error }) {
  return (
    <div className="infinite-list">
      {items.map((item) => (
        <div
          key={item.id}
          className="infinite-list__item"
          style={{ height: "40px" }}
        >
          {" "}
          {item.description}{" "}
        </div>
      ))}
      {loading && (
        <div className="loading" aria-live="polite">
          Loading...
        </div>
      )}
      {error && (
        <div className="error" role="alert">
          Error: {error.message}
        </div>
      )}
    </div>
  );
}

export default InfiniteList;
