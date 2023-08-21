/* eslint-disable react/prop-types */

import "./styles.css";

import Cell from "./Cell";

function Board({ board, onClick, selectedCell }) {
  return (
    <div className="board">
      {board.map((row, index) => (
        <div key={index} className="row">
          {row.map((cell, cellIndex) => (
            <Cell
              isSelected={
                index === selectedCell.row && cellIndex === selectedCell.column
              }
              value={board[index][cellIndex]}
              onClick={() => onClick(index, cellIndex)}
              key={`${index}${cellIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
