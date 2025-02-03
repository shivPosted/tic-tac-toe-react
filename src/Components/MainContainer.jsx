import { useGameContext } from "./Contexts/GameContext";
import Player from "./Player";

function MainContainer({ children }) {
  return (
    <main id="game-container">
      <ol id="players">
        <Player name="Max" symbol="O" />

        <Player name="Manual" symbol="X" />
      </ol>
      {children}
    </main>
  );
}
export default MainContainer;
