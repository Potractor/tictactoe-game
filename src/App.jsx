import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import Message from "./components/Message";
import calculateWinner from "./components/calculateWinner";
import History from "./components/History";
function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);
  const moveTo = (move) => {
    setCurrentMove(move);
  };
  const clickHandler = (position) => {
    if (gamingBoard.squares[position] || winner) {
      return;
    }
    setHistory((currentHistory) => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextGamingState = lastGamingState.squares.map((currvalue, pos) => {
        if (position === pos) {
          return lastGamingState.isXNext ? "X" : "O";
        }
        return currvalue;
      });
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;
      return base.concat({
        squares: nextGamingState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setCurrentMove((move) => move + 1);
  };
  return (
    <>
      <div className="app">
        <Message gamingBoard={gamingBoard} winner={winner} />
        <Board square={gamingBoard.squares} clickHandler={clickHandler} />
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </>
  );
}

export default App;
