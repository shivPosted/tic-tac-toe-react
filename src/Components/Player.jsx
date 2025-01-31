import { useEffect, useState } from "react";

function Player({ name, symbol, playersRef }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  useEffect(() => {
    playersRef.name = playerName;
  }, [playerName, playersRef]);

  const Name = isEditing ? (
    <input
      type="text"
      value={playerName}
      onChange={(e) => {
        setPlayerName(e.target.value);
        playersRef.name = e.target.value;
      }}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li>
      <span className="player">
        {Name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((cur) => !cur)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
export default Player;
