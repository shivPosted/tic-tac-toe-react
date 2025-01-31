import { useState } from "react";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import GameBoard from "./Components/GameBoard";

export default function App() {
  const [trackList, setTrackList] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [currentSymbol, setCurrentSymbol] = useState("X");

  return (
    <>
      <Header />
      <MainContainer>
        <GameBoard
          trackList={trackList}
          setTrackList={setTrackList}
          currentSymbol={currentSymbol}
          setCurrentSymbol={setCurrentSymbol}
        />
      </MainContainer>
    </>
  );
}
