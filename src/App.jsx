import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import GameBoard from "./Components/GameBoard";
import GameOver from "./Components/GameOver";
import { useGameContext } from "./Components/Contexts/GameContext";

export default function App() {
  const { result } = useGameContext();
  return (
    <>
      <Header />
      {result ? (
        <GameOver />
      ) : (
        <MainContainer>
          <GameBoard />
        </MainContainer>
      )}
    </>
  );
}
