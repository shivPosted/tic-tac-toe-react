function GameBoard({
  trackList,
  setTrackList,
  currentSymbol,
  setCurrentSymbol,
}) {
  function handleClick(row, col, symbol) {
    const newArr = trackList.map((rowList, rowIndex) => {
      return rowList.map((colItem, colIndex) =>
        rowIndex === row && colIndex === col ? symbol : colItem,
      );
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
