import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import GameBoard from "./Components/GameBoard";
import GameOver from "./Components/GameOver";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function compareArrNum(arrTo) {
  const sortedArrTo = [...arrTo].sort((a, b) => a - b);

  const isEqual = winningConditions.some((item) => {
    return item.every((num, i) => num === sortedArrTo[i]);
  });

  return isEqual;
}

export default function App() {
  const [trackList, setTrackList] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [currentSymbol, setCurrentSymbol] = useState("X");
  const [result, setResult] = useState(null);

  const playerTurnTrackRef = useRef({
    playerX: {
      turns: [],
      name: "",
    },
    playerO: {
      turns: [],
      name: "",
    },
  });

  useEffect(() => {
    function doesWon(arrToCheck) {
      const isWinning = compareArrNum(arrToCheck);
      isWinning
        ? setResult(
            currentSymbol === "X"
              ? playerTurnTrackRef.current.playerO.name
              : playerTurnTrackRef.current.playerX.name,
          )
        : null;
      if (isWinning)
        console.log(`Player ${currentSymbol === "X" ? "O" : "X"} won`);
    }
    if (currentSymbol === "X")
      doesWon(playerTurnTrackRef.current.playerO.turns);
    if (currentSymbol === "O")
      doesWon(playerTurnTrackRef.current.playerX.turns);
  }, [currentSymbol]);

  function handleRestart() {
    setResult(null);
    setTrackList([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setCurrentSymbol("X");
    playerTurnTrackRef.current = {
      playerO: {
        turns: [],
        name: "",
      },
      playerX: {
        turns: [],
        name: "",
      },
    };
  }

  return (
    <>
      <Header />
      {result ? (
        <GameOver playerWon={result} onRestart={handleRestart} />
      ) : (
        <MainContainer updateNameRef={playerTurnTrackRef.current}>
          <GameBoard
            trackList={trackList}
            setTrackList={setTrackList}
            currentSymbol={currentSymbol}
            setCurrentSymbol={setCurrentSymbol}
            updateRef={playerTurnTrackRef.current}
          />
        </MainContainer>
      )}
    </>
  );
}
