import { useState } from "react";

export const useTicTacToe = () => {
  const [board, setBoard] = useState(Array(3).fill(Array(3).fill(null)));
  const [xIsNext, setXIsNext] = useState(true);
  const togglePlayer = () => setXIsNext(!xIsNext);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (board) => {
    const lines = [
      // Horizontal
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      // Vertical
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      // Diagonal
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (a && a === b && a === c) {
        return a;
      }
    }

    if (board.flat().every((cell) => cell !== null)) {
      return "draw";
    }

    return null;
  };

  const handleClick = (rowIndex, columnIndex) => {
    if (winner) {
      return;
    }

    const newBoard = board.map((row, index) => {
      if (index !== rowIndex) {
        return row;
      }

      return row.map((cell, cellIndex) => {
        if (cellIndex !== columnIndex) {
          return cell;
        }

        return xIsNext ? "X" : "O";
      });
    });

    const winState = calculateWinner(newBoard);
    if (winState || board[rowIndex][columnIndex]) {
      if (winState === "draw") {
        setWinner("draw");
      }
      if (winState) {
        setWinner(winState);
      }
      if (board[rowIndex][columnIndex]) {
        return;
      }
    }

    setBoard(newBoard);
    togglePlayer();
  };

  return { board, winner, handleClick };
};
