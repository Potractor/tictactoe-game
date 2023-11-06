import Square from "./Square";
import { useState } from "react";
const Board = () => {
  const [square, setsquare] = useState(Array(9).fill(null));
  console.log(square);
  const clickHandler = (position) => {
    setsquare((currentsquare) => {
      return currentsquare.map((currvalue, pos) => {
        if (position === pos) return "X";
        else return currvalue;
      });
    });
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
