import { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import GameBoard from "./Components/GameBoard";
import GameOver from "./Components/GameOver";

const winningCondition = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],

  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],

  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

function calculatedResult(array) {
  const flattenCondn = winningCondition.map((item) =>
    item.flat().sort((a, b) => a - b),
  );
  const conditionedRecArr = array.flat().sort((a, b) => a - b);
  const result = flattenCondn.some((winCond) => {
    const isMatched = winCond.every((num, j) => num === conditionedRecArr[j]);
    return isMatched;
  });
  return result;
}

export default function App() {
  const [trackList, setTrackList] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [currentSymbol, setCurrentSymbol] = useState("X");
  const [result, setResult] = useState(null);

  const playersTrackRef = useRef({
    player1: {
      turns: [],
      name: "",
    },
    player2: {
      turns: [],
      name: "",
    },
  });

  function calculateResult() {
    if (
      playersTrackRef.current.player1.turns.length === 0 ||
      playersTrackRef.current.player2.turns.length === 0
    )
      return null;
    const result = calculatedResult(playersTrackRef.current.player1.turns)
      ? playersTrackRef.current.player1.name
      : calculatedResult(playersTrackRef.current.player2.turns)
        ? playersTrackRef.current.player2.name
        : "";

    setResult(result ? result : "Draw");
  }
  useEffect(() => {
    calculateResult();
  }, [playersTrackRef.current]);

  return (
    <>
      <Header />
      {result ? (
        <GameOver />
      ) : (
        <MainContainer playersRef={playersTrackRef}>
          <GameBoard
            trackList={trackList}
            setTrackList={setTrackList}
            currentSymbol={currentSymbol}
            setCurrentSymbol={setCurrentSymbol}
            playersRef={playersTrackRef.current}
          />
        </MainContainer>
      )}
    </>
  );
}
