import Square from "./Square";
import { useState } from "react";
const Board = () => {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  console.log(square);
  const clickHandler = (position) => {
    if (square[position]) {
      return;
    }
    setsquare((currentsquare) => {
      return currentsquare.map((currvalue, pos) => {
        if (position === pos) {
          return isXNext ? "X" : "O";
        } else return currvalue;
      });
    });
    setIsXNext((currentstate) => !currentstate);
  };
  const rendersquare = (position) => {
    return (
      <Square value={square[position]} onclick={() => clickHandler(position)} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};

export default Board;
