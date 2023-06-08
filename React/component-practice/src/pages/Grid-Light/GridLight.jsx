import React, { useEffect } from "react";
import "./style.css";

function Square({ on, index }) {
  return (
    <div
      style={{ visibility: index === 4 ? "hidden" : "visible" }}
      className={(on !== undefined ? "green" : "white") + " square"}
    ></div>
  );
}

function GridLight() {
  const [sequence, setSequence] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);

  useEffect(() => {
    if (sequence.length < 8 && !toggle) return;
    const timer = setTimeout(() => {
      setSequence(sequence.filter((_, index) => index !== sequence.length - 1));
    }, 400);

    if (sequence.length === 0) {
      setToggle(false);
    }
    return () => clearTimeout(timer);
  }, [sequence, toggle]);

  const onSelect = (index) => {
    const newSequence = [...sequence, index];
    setSequence(newSequence);

    if (sequence.length === 7) {
      setToggle(true);
    }
  };

  return (
    <div style={{ width: "320px", display: "flex", "flex-wrap": "wrap" }}>
      {Array.from({ length: 9 }).map((square, index) => (
        <div key={index} className="row" onClick={() => onSelect(index)}>
          <Square
            key={`${index}-square`}
            on={sequence.find((item) => item === index)}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

export default GridLight;
