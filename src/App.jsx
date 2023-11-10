import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import Message from "./components/Message";
import calculateWinner from "./components/calculateWinner";
import History from "./components/History";
const NEWGAME = [{ squares: Array(9).fill(null), isXNext: false }];
function App() {
  const [history, setHistory] = useState(NEWGAME);
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
  const startNewGame = () => {
    setCurrentMove(0);
    setHistory(NEWGAME);
  };
  return (
    <>
      <div className="app">
        <Message gamingBoard={gamingBoard} winner={winner} />
        <Board square={gamingBoard.squares} clickHandler={clickHandler} />
        <button
          className={`btn-reset ${winner ? "active" : ""}`}
          onClick={startNewGame}
        >
          start newgame
        </button>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </>
  );
}

export default App;
