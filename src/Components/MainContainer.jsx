import Player from "./Player";

function MainContainer({ children, playersRef }) {
  return (
    <main id="game-container">
      <ol id="players">
        <Player name="Max" symbol="O" playersRef={playersRef.current.player1} />

        <Player
          name="Manual"
          symbol="X"
          playersRef={playersRef.current.player2}
        />
      </ol>
      {children}
    </main>
  );
}
export default MainContainer;
