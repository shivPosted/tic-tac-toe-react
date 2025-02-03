import { useState } from "react";
import { useGameContext } from "./Contexts/GameContext";

function Player({ symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const { playerXName, playerOName, handleNameChange } = useGameContext();

  const Name = isEditing ? (
    <input
      type="text"
      value={symbol === "X" ? playerXName : playerOName}
      onChange={(e) => {
        handleNameChange(e.target.value, symbol);
      }}
    />
  ) : (
    <span className="player-name">
      {symbol === "X" ? playerXName : playerOName}
    </span>
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
