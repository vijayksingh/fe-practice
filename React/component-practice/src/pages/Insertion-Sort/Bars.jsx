// TODO
/*
 - Render a Horizontal Bar

*/

import "./style.css";

function Bars({ count, red }) {
  const height = count * 2;
  let backgroundColor = red ? "red" : "green";
  return (
    <div
      className="bar"
      style={{
        "--height": `${height}px`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {count}
    </div>
  );
}

export default Bars;
