/* eslint-disable react/prop-types */

import { useState } from "react";
import Board from "./Board";
import "./styles.css";
import { useTicTacToe } from "./useTicTacToe";

function TicTacToe() {
  const [selectedCell, setSelectedCell] = useState({ row: 0, column: 0 });
  const { board, winner, handleClick } = useTicTacToe();

  const handleKeyDown = (event) => {
    const { row, column } = selectedCell;
    switch (event.key) {
      case "ArrowUp":
        setSelectedCell({ row, column: Math.max(column - 1, 0) });
        break;
      case "ArrowDown":
        setSelectedCell({ row, column: Math.min(column + 1, 2) });
        break;
      case "ArrowLeft":
        setSelectedCell({ row: Math.max(row - 1, 0), column });
        break;
      case "ArrowRight":
        setSelectedCell({ row: Math.min(row + 1, 2), column });
        break;
      case "Enter" || " ":
        handleClick(row, column);
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <h1>Tic Tac Toe</h1>
      <div className="game" onKeyDown={handleKeyDown} tabIndex={0}>
        <Board
          board={board}
          onClick={handleClick}
          selectedCell={selectedCell}
        />
      </div>
      {winner === "draw" && <h3>Draw</h3>}
      {winner !== "draw" && winner && <h3>{winner} won!</h3>}
    </section>
  );
}

export default TicTacToe;
