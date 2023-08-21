/* eslint-disable react/prop-types */
import "./styles.css";
function Cell({ value, onClick, isSelected }) {
  return (
    <button
      className={`cell ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      aria-selected={isSelected}
      role="cell"
      aria-disabled={value !== null}
    >
      {value}
    </button>
  );
}

export default Cell;
