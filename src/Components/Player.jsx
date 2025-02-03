import { useEffect, useState } from "react";

function Player({ name, symbol, updateName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  console.log(updateName);
  const Name = isEditing ? (
    <input
      type="text"
      value={playerName}
      onChange={(e) => {
        setPlayerName(e.target.value);
      }}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  useEffect(() => {
    updateName.name = playerName;
  }, [playerName, updateName]);
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
