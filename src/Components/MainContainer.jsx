import Player from "./Player";

function MainContainer({ children, updateNameRef }) {
  return (
    <main id="game-container">
      <ol id="players">
        <Player name="Max" symbol="O" updateName={updateNameRef.playerO} />

        <Player name="Manual" symbol="X" updateName={updateNameRef.playerX} />
      </ol>
      {children}
    </main>
  );
}
export default MainContainer;
