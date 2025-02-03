function GameBoard({
  trackList,
  setTrackList,
  currentSymbol,
  setCurrentSymbol,
  updateRef,
}) {
  function handleClick(e, row, col, symbol) {
    if (e.target.value) return null; //NOTE: in case when it already been fieled

    const newArr = trackList.map((rowList, rowIndex) => {
      return rowList.map((colItem, colIndex) => {
        if (colItem !== null) return colItem;
        const condn = rowIndex === row && colIndex === col;
        if (condn) {
          let accumFactor;
          if (rowIndex === 0) accumFactor = 0;
          if (rowIndex === 1) accumFactor = 3;
          if (rowIndex === 2) accumFactor = 6;

          if (currentSymbol === "X")
            updateRef.playerX.turns.push(accumFactor + col);
          else if (currentSymbol === "O")
            updateRef.playerO.turns.push(accumFactor + col);
        }
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
                        onClick={(e) =>
                          handleClick(e, rowIndex, colIndex, currentSymbol)
                        }
                        value={playerSymbol}
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
