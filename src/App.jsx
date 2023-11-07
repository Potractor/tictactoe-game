import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import Message from "./components/Message";
import calculateWinner from "./components/calculateWinner";

function App() {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(square);

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
        <Message square={square} isXNext={isXNext} winner={winner} />
        <Board square={square} clickHandler={clickHandler} />
      </div>
    </>
  );
}

export default App;
