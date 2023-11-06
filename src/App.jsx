import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import calculateWinner from "./components/calculateWinner";
function App() {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(square);
  const nextplayer = isXNext ? "X" : "O";
  const showmessage = winner
    ? `winner is ${winner}`
    : `next player is ${nextplayer}`;
  console.log(square);
  const clickHandler = (position) => {
    if (square[position] || winner) {
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
  return (
    <>
      <div className="app">
        <h2>{showmessage}</h2>
        <Board square={square} clickHandler={clickHandler} />
      </div>
    </>
  );
}

export default App;
