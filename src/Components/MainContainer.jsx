import Player from "./Player";

function MainContainer() {
  return (
    <main id="game-container">
      <ol id="players">
        <Player name="Max" symbol="O" />
        <Player name="Manual" symbol="X" />
      </ol>
    </main>
  );
}
export default MainContainer;
