function GameBoard({
  trackList,
  setTrackList,
  currentSymbol,
  setCurrentSymbol,
  playersRef,
}) {
  console.log(playersRef);
  function trackPlayerTurns(rowCol, symbol) {
    if (symbol === "X") playersRef.player1.turns.push(rowCol);
    else playersRef.player2.turns.push(rowCol);
  }

  function handleClick(row, col, symbol) {
    const newArr = trackList.map((rowList, rowIndex) => {
      return rowList.map((colItem, colIndex) => {
        const condn = rowIndex === row && colIndex === col;
        if (condn) trackPlayerTurns([rowIndex, colIndex], symbol);
        return condn ? symbol : colItem;
      });
    });
    setTrackList(newArr);
    setCurrentSymbol((cur) => (cur === "X" ? "O" : "X"));
  }

  return (
    <div id="game-board">
      <ol>
        {trackList.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {row.map((playerSymbol, colIndex) => {
                  return (
                    <li key={colIndex}>
                      <button
                        onClick={() =>
                          handleClick(rowIndex, colIndex, currentSymbol)
                        }
                      >
                        {playerSymbol}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default GameBoard;
