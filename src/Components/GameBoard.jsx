import { useGameContext } from "./Contexts/GameContext";

function GameBoard() {
  const {
    trackList,
    handleTrackListChange,
    currentSymbol,
    handleCurrentSymbolChange,
    handlePlayerTurnTrack,
  } = useGameContext();

  function handleClick(e, row, col) {
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
            handlePlayerTurnTrack("X", accumFactor + col);
          else if (currentSymbol === "O")
            handlePlayerTurnTrack("O", accumFactor + col);
        }
        return condn ? currentSymbol : colItem;
      });
    });
    handleTrackListChange(newArr);
    handleCurrentSymbolChange(currentSymbol === "X" ? "O" : "X");
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
                        onClick={(e) => handleClick(e, rowIndex, colIndex)}
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
