function GameOver({ playerWon, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{playerWon} won</p>
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
}
export default GameOver;
