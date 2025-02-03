import { useGameContext } from "./Contexts/GameContext";

function GameOver() {
  const { handleRestart, result } = useGameContext();
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{result} won</p>
      <button onClick={handleRestart}>Rematch</button>
    </div>
  );
}
export default GameOver;
