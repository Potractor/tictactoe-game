const Message = ({ square, winner, isXNext }) => {
  const nextplayer = isXNext ? "X" : "O";
  const noMovesLeft = square.every((sqaurevalue) => sqaurevalue !== null);
  const renderStatusMessage = () => {
    if (winner)
      return (
        <>
          winner is
          <span className={isXNext ? "text-orange" : "text-green"}>
            {winner}
          </span>
        </>
      );
    if (!winner && !noMovesLeft)
      return (
        <>
          nextplayer is
          <span className={isXNext ? "text-green" : "text-orange"}>
            {nextplayer}
          </span>
        </>
      );
    if (!winner && noMovesLeft)
      return (
        <>
          <span className="text-orange">O</span> and{" "}
          <span className="text-green">X</span> tied
        </>
      );
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default Message;
